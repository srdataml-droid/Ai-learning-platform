// app.js - Shared Application Logic
// Theme, Progress, Navigation, Header Measurement, Scroll Progress, and Accessibility

(function () {
  const STORAGE_PROGRESS_KEY = 'curriculum_progress';
  const STORAGE_THEME_KEY = 'curriculum_theme';

  // 1. Theme Management
  function initTheme() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
      if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else if (savedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        // Default is light as specified in Design Brief
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      console.warn('localStorage theme read failed:', e);
    }
    updateThemeToggleButtons();
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    try {
      if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_THEME_KEY, 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_THEME_KEY, 'light');
      }
    } catch (e) {
      console.warn('localStorage theme write failed:', e);
    }
    updateThemeToggleButtons();
  }

  function updateThemeToggleButtons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.textContent = isDark ? 'Light' : 'Dark';
    });
  }

  // 2. Header Measurement for Sticky Offset
  function measureHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-h', `${h}px`);
  }

  // 3. Scroll Progress Indicator
  function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-line');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = `${scrolled}%`;
    }, { passive: true });
  }

  // 4. Progress Management (localStorage single key array of strings)
  window.CurriculumApp = {
    getCompletedTasks: function () {
      try {
        const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.warn('Error reading progress:', e);
        return [];
      }
    },

    isTaskCompleted: function (taskId) {
      const completed = this.getCompletedTasks();
      return completed.includes(taskId);
    },

    setTaskCompleted: function (taskId, isDone) {
      try {
        let list = this.getCompletedTasks();
        if (isDone) {
          if (!list.includes(taskId)) list.push(taskId);
        } else {
          list = list.filter((id) => id !== taskId);
        }
        localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(list));
      } catch (e) {
        console.warn('Error saving progress:', e);
      }
      this.notifyProgressChanged();
    },

    resetAllProgress: function () {
      try {
        localStorage.removeItem(STORAGE_PROGRESS_KEY);
      } catch (e) {
        console.warn('Error resetting progress:', e);
      }
      this.notifyProgressChanged();
    },

    notifyProgressChanged: function () {
      window.dispatchEvent(new CustomEvent('curriculum-progress-updated'));
    },

    getTrackStats: function (trackId) {
      if (!window.CURRICULUM) return { completed: 0, total: 0, percent: 0 };
      const track = window.CURRICULUM.tracks.find((t) => t.id === trackId);
      if (!track) return { completed: 0, total: 0, percent: 0 };

      const completedList = this.getCompletedTasks();
      const completedCount = track.tasks.filter((t) => completedList.includes(t.id)).length;
      const totalCount = track.tasks.length;
      const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      return {
        completed: completedCount,
        total: totalCount,
        percent: percent
      };
    },

    getTotalStats: function () {
      if (!window.CURRICULUM) return { completed: 0, total: 0, percent: 0 };
      const completedList = this.getCompletedTasks();
      let totalCount = 0;
      let completedCount = 0;

      window.CURRICULUM.tracks.forEach((track) => {
        track.tasks.forEach((t) => {
          totalCount++;
          if (completedList.includes(t.id)) {
            completedCount++;
          }
        });
      });

      const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
      return {
        completed: completedCount,
        total: totalCount,
        percent: percent
      };
    },

    toggleTheme: toggleTheme
  };

  // 5. Active Navigation Marker
  function markActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-nav .nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const cleanHref = href.split('?')[0].split('/').pop();
      if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // 6. Modal Accessibility Helper
  window.setupModalAccessibility = function (modalId, triggerId, cancelId) {
    const modal = document.getElementById(modalId);
    const trigger = document.getElementById(triggerId);
    const cancel = document.getElementById(cancelId);
    if (!modal) return;

    let previousActiveElement = null;

    function openModal() {
      previousActiveElement = document.activeElement;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    }

    if (trigger) {
      trigger.addEventListener('click', openModal);
    }
    if (cancel) {
      cancel.addEventListener('click', closeModal);
    }

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    return { open: openModal, close: closeModal };
  };

  // Initialization on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    measureHeader();
    initScrollProgress();
    markActiveNav();

    // Resize observer for header
    const header = document.querySelector('.site-header');
    if (header && window.ResizeObserver) {
      const ro = new ResizeObserver(() => measureHeader());
      ro.observe(header);
    } else {
      window.addEventListener('resize', measureHeader);
    }

    // Attach theme toggle click handlers
    document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();

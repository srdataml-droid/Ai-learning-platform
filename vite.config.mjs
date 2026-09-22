import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Every page the site serves. The build breaks if one is missing from here: a
// page absent from rollupOptions.input is served fine by the dev server and
// 404s in production, which is how lesson.html shipped broken.
export const PAGES = ['index', 'lesson', 'track', 'language', 'languages', 'words', 'compare', 'progress'];

// The site is multi-page vanilla HTML/CSS/JS. There is no framework and no CSS
// toolchain: styles.css is hand-written and every page loads it directly. Vite
// is here to bundle and serve those pages, nothing more.
//
// No `defineConfig` import: it is a types-only helper, this project has no
// TypeScript, and importing it would make the config unloadable by the test
// suite on a checkout with no node_modules installed.
export default {
  base: './',
  build: {
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((name) => [name, path.resolve(root, `${name}.html`)])),
    },
  },
  server: {
    // HMR is disabled in AI Studio via the DISABLE_HMR env var. File watching is
    // disabled with it to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
};

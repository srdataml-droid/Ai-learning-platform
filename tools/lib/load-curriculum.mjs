import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

/**
 * data.js and lessons-data.js are browser scripts that assign to `window`.
 * Run them in a VM with a stub window rather than importing them, so tools
 * read exactly what the pages read, with no Node globals leaking in.
 */
export async function loadCurriculum(root = new URL('../../public/', import.meta.url)) {
  const context = vm.createContext({ window: {}, console });
  for (const file of ['data.js', 'lessons-data.js']) {
    const path = fileURLToPath(new URL(file, root));
    const code = await readFile(path, 'utf8');
    new vm.Script(code, { filename: file }).runInContext(context);
  }
  return {
    CURRICULUM: context.window.CURRICULUM,
    CurriculumLessons: context.window.CurriculumLessons,
  };
}

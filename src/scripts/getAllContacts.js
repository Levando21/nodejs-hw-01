import fs from 'node:fs/promises';
import { PATH_DB } from '../constans/contacts.js';

(async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    console.log({ data });
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();

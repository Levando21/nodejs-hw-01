import { PATH_DB } from '../constans/contacts.js';

import fs from 'fs/promises';

async function removeContacts() {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log(`Successfully removed all contacts.`);
  } catch (err) {
    console.error('Error removing contacts:', err);
  }
}

removeContacts();

import { PATH_DB } from '../constans/contacts.js';

import fs from 'fs/promises';

async function removeOneContact() {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');

    const data = JSON.parse(contacts);

    if (data.length > 0) {
      console.log(data.length);
    } else {
      console.log('No contacts found.');
      return;
    }
  } catch (err) {
    console.error('Error removing contacts:', err);
  }
}

removeOneContact();

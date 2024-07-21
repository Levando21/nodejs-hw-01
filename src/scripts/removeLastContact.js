import { PATH_DB } from '../constans/contacts.js';

import fs from 'fs/promises';

async function removeOneContact() {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');

    const data = JSON.parse(contacts);

    if (data.length > 0) {
      data.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } else {
      console.log(contacts);
      console.log('No contacts to remove.');
      return;
    }
  } catch (err) {
    console.error('Error removing contacts:', err);
  }
}

removeOneContact();

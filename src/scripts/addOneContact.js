import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContacts.js';
import { PATH_DB } from '../constans/contacts.js';

async function addOneContact(count) {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Successfully added ${count} contacts.`);
  } catch (err) {
    console.error('Error adding contact:', err);
  }
}

addOneContact(1);

import { PATH_DB } from '../constans/contacts.js';
import { createFakeContact } from '../utils/createFakeContacts.js';
import fs from 'fs/promises';

async function generateContacts(count) {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Successfully added ${count} contacts.`);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
}

generateContacts(5);

import { PATH_DB } from '../constans/contacts';
import fs from 'fs/promises';

async function getAllContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log(contacts);
  } catch (err) {
    console.error('Error getting all contacts:', err);
  }
}

getAllContacts();

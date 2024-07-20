import { faker } from '@faker-js/faker';

export function createFakeContact() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    mail: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
  };
}

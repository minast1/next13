import { Prisma, PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([prisma.user.deleteMany(), prisma.mail.deleteMany()]);

  console.log(`Start seeding ...`);
  const hash = await argon2.hash("password");
  const users: Prisma.UserCreateInput[] = Array.from({ length: 4 }, () => ({
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    password: hash,
  }));
  const db_users = await prisma.user.createMany({ data: users });

  const userIds = await prisma.user.findMany({ select: { id: true } });
  const get_existing_user_ids: string[] = userIds.map((el) => el.id);

  const mails = Array.from({ length: 50 }, () => ({
    title: faker.company.buzzPhrase(),
    from: faker.company.name(),
    description: faker.lorem.sentence(),
    userId: faker.helpers.arrayElement(get_existing_user_ids),
  }));

  await prisma.mail.createMany({
    data: mails,
  });
  console.log(`Seeding finished.`);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });

import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const products: Prisma.ProductCreateInput[] = Array.from(
  { length: 10 },
  () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: new Prisma.Decimal(faker.commerce.price({ min: 100, max: 200 })),
    image: faker.image.urlLoremFlickr({
      category: "fashion",
      width: 300,
      height: 350,
    }),
    category: faker.helpers.arrayElement([
      "Clothes",
      "Electronics",
      "Jewelery",
      "Shoes",
    ]),
  })
);
async function main() {
  await prisma.product.deleteMany();
  console.log(`Start seeding ...`);
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });

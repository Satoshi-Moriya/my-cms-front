// ToDo 沼りそう＆データ投入なので一旦eslint無視する
/* eslint-disable */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postsData: any = [];

async function main() {
  console.log("Seeding data...");

  // ToDo 一旦ユーザーは1人ということでアプリを実装する
  const user = await prisma.user.create({
    data: {
      email: "satoshi@example.com",
      name: "Satoshi",
      password: "1234-567m89",
    },
  });

  for (let i = 0; i < 100; i++) {
    postsData.push({
      title: `Post #${i + 1}`,
      content: `This is the content of post #${i + 1}`,
      status: "publish",
      slug: `post-slug-${i + 1}`,
      user_id: user.id,
    });
  }

  await prisma.post.createMany({
    data: postsData,
  });

  console.log("Data seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
/* eslint-enable */

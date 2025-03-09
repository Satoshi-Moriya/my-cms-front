// データベースからurlのslugのデータを取得する機能を実装する

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ToDo エラーハンドリングを追加する
export async function fetchPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return post;
}

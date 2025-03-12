// データベースからurlのslugのデータを取得する機能を実装する

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ToDo エラーハンドリングを追加する
export async function fetchPostByPostId(postId: number) {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
}

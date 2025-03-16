// ToDo エラーハンドリングを追加する

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchPostByPostId(postId: number) {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
}

export async function fetchPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return posts;
}

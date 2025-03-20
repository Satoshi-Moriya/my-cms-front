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

const ITEMS_PER_PAGE = 10;
export async function fetchPostsPages() {
  const totalPost = await prisma.post.count();
  const totalPage = Math.ceil(totalPost / ITEMS_PER_PAGE);

  return totalPage;
}

export async function fetchPostsByPage(page: number) {
  const posts = await prisma.post.findMany({
    orderBy: {
      created_at: "desc",
    },
    skip: (page - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
  });

  return posts;
}

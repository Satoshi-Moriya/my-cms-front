"use server";

import { parseWithZod } from "@conform-to/zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { deletePostSchema, postSchema } from "../schema";

const prisma = new PrismaClient();

// ToDo server actionなのでasyncが必要だが、lintエラーが起きるので下記で一旦無効化している
// eslint-disable-next-line
export async function createPost(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      status: formData.get("status") as string,
      content: formData.get("content") as string,
      slug: formData.get("slug") as string,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  return submission.reply();

  // redirect("/");
}

// ToDo server actionなのでasyncが必要だが、lintエラーが起きるので下記で一旦無効化している
// eslint-disable-next-line
export async function editPost(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.post.update({
    where: {
      id: Number(formData.get("id")),
    },
    data: {
      title: formData.get("title") as string,
      status: formData.get("status") as string,
      content: formData.get("content") as string,
      slug: formData.get("slug") as string,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  return submission.reply();

  // redirect("/");
}

// ToDo deleteだけ独自に返り値を返すようにしているが、見直したい（formに入力欄がないため）
// ToDo server actionなのでasyncが必要だが、lintエラーが起きるので下記で一旦無効化している
// eslint-disable-next-line
export async function deletePost(ids: number[]) {
  const submission = deletePostSchema.safeParse({
    ids,
  });

  if (!submission.success) {
    return { status: "error", ids: ids };
  }
  await prisma.post.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  revalidatePath("/");
  return { status: "success", ids: ids };
}

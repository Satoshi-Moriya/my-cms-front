"use server";

import { parseWithZod } from "@conform-to/zod";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

import { postSchema } from "../schema";

const prisma = new PrismaClient();

// ToDo server actionなのでasyncが必要だが、lintエラーが起きるので下記で一旦無効化している
// eslint-disable-next-line
export async function createPost(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    console.log("error");
    return submission.reply();
  }

  console.log("post");
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      status: formData.get("status") as string,
      content: formData.get("content") as string,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  redirect("/");
}

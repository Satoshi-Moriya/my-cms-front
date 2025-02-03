"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

import { postSchema } from "../schema";

// ToDo server actionなのでasyncが必要だが、lintエラーが起きるので下記で一旦無効化している
// eslint-disable-next-line
export async function createPosts(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect("/");
}

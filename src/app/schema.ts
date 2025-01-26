import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({ required_error: "タイトルは必須です" })
    .max(100, "タイトルは100文字以内で入力してください"),
  slug: z.string({ required_error: "スラッグは必須です" }),
});

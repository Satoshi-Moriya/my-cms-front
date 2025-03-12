"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Post } from "@prisma/client";
import Link from "next/link";
import { useActionState } from "react";

import { editPost } from "../lib/actions";
import { updatePostSchema } from "../schema";

export default function Form({ post }: { post: Post }) {
  const [lastResult, action] = useActionState(editPost, undefined);
  const [form, fields] = useForm({
    lastResult,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: updatePostSchema });
    },
    defaultValue: {
      id: post.id,
      title: post.title,
      content: post.content,
      slug: post.slug,
      status: post.status,
    },
  });

  return (
    <form action={action} className="grid gap-4" id={form.id} noValidate onSubmit={form.onSubmit}>
      <input
        defaultValue={fields.id.value}
        id="postId"
        key={fields.id.key}
        name={fields.id.name}
        type="hidden"
      />
      <div className="text-red-500">{fields.id.errors}</div>
      <div>
        <div>
          <label htmlFor="title">タイトル</label>
        </div>
        <div>
          <input
            className="input input-bordered w-full"
            defaultValue={fields.title.value}
            id="title"
            key={fields.slug.key}
            name={fields.title.name}
            placeholder="記事のタイトルを入力"
            type="text"
          />
          <div className="text-red-500">{fields.title.errors}</div>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="content">本文</label>
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full"
            defaultValue={fields.content.value}
            id="content"
            key={fields.content.key}
            name={fields.content.name}
            placeholder="記事の内容を入力"
          ></textarea>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="slug">スラッグ</label>
        </div>
        <div>
          <input
            className="input input-bordered w-full"
            defaultValue={fields.slug.value}
            id="slug"
            key={fields.slug.key}
            name={fields.slug.name}
            placeholder="スラッグを入力"
            type="text"
          />
          <div className="text-red-500">{fields.slug.errors}</div>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="status">ステータス</label>
        </div>
        <div>
          <select
            className="select select-bordered w-full"
            defaultValue={fields.status.value}
            id="status"
            name={fields.status.name}
          >
            <option value="draft">下書き</option>
            <option value="publish">公開</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-neutral">保存</button>
        <Link className="btn" href="/">
          戻る
        </Link>
      </div>
    </form>
  );
}

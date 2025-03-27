"use client";

import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

import { useCheckedIdStore } from "../lib/checked-id";

export default function PostTable({ posts }: { posts: Post[] }) {
  const ids = useCheckedIdStore((state) => state.ids);
  console.log(ids);

  const changeCheckedId = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      useCheckedIdStore.getState().checkId(id);
    } else {
      useCheckedIdStore.getState().removeId(id);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <label>
              <input className="checkbox" type="checkbox" />
            </label>
          </th>
          <th>タイトル</th>
          <th>作成日</th>
          <th>ステータス</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <th>
              <label>
                <input
                  className="checkbox"
                  onChange={(event) => changeCheckedId(post.id, event)}
                  type="checkbox"
                />
              </label>
            </th>
            <td>{post.title}</td>
            <td>{new Date(post.created_at).toLocaleDateString()}</td>
            <td>{post.status == "publish" ? "公開" : "下書き"}</td>
            <th>
              <Link className="btn btn-ghost btn-xs" href={`/posts/${post.id}`}>
                編集
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

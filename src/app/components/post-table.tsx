import Link from "next/link";

import { fetchPostsByPage } from "../lib/data";

export default async function PostTable({ currentPage }: { currentPage: number }) {
  const posts = await fetchPostsByPage(currentPage);

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
                <input className="checkbox" type="checkbox" />
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

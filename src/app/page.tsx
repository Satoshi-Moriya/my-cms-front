import Link from "next/link";

import Modal from "./components/modal";
import PostTable from "./components/post-table";
import { fetchPosts } from "./lib/data";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto">
      <h1 className="p-5 text-3xl font-bold">ダッシュボード</h1>
      <main className="p-5">
        <div className="flex items-center justify-between py-3">
          <details className="dropdown">
            <summary className="btn m-1">N件選択中</summary>
            <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <a>下書きに戻す</a>
              </li>
              <li>
                <Modal />
              </li>
            </ul>
          </details>
          <Link className="btn btn-neutral btn-active" href="/posts">
            新規追加
          </Link>
        </div>
        <div className="overflow-x-auto">
          <PostTable posts={posts} />
        </div>
        <div className="join py-3">
          <button className="btn join-item">1</button>
          <button className="btn join-item">2</button>
          <button className="btn btn-disabled join-item">...</button>
          <button className="btn join-item">99</button>
          <button className="btn join-item">100</button>
        </div>
      </main>
    </div>
  );
}

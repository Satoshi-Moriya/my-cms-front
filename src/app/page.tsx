import Link from "next/link";

import Modal from "./components/modal";
import { Pagination } from "./components/pagination";
import PostTable from "./components/post-table";
import { fetchPostsByPage, fetchPostsPages } from "./lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
  }>;
}) {
  const totalPages = await fetchPostsPages();
  const currentPage = Number((await searchParams).page) || 1;
  const posts = await fetchPostsByPage(currentPage);

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
        <Pagination totalPages={totalPages} />
      </main>
    </div>
  );
}

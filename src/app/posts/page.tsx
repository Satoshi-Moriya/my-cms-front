import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto">
      <h1 className="p-5 text-3xl font-bold">記事作成・編集</h1>
      <main className="p-5">
        <p>投稿作成・編集ページ</p>
        <Link href="/">戻る</Link>
      </main>
    </div>
  );
}

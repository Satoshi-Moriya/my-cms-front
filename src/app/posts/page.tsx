import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="p-5 text-3xl font-bold">記事作成・編集</h1>
      <main className="p-5">
        <form action="" className="grid gap-4">
          <div>
            <div>
              <label htmlFor="">タイトル</label>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="記事のタイトルを入力"
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">本文</label>
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="記事の内容を入力"
              ></textarea>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">スラッグ</label>
            </div>
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="スラッグを入力"
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">ステータス</label>
            </div>
            <div>
              <select className="select select-bordered w-full">
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
      </main>
    </div>
  );
}

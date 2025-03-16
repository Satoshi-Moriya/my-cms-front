import Link from "next/link";

export default function PostTable() {
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
        <tr>
          <th>
            <label>
              <input className="checkbox" type="checkbox" />
            </label>
          </th>
          <td>投稿タイトル</td>
          <td>2024/12/21</td>
          <td>公開</td>
          <th>
            <Link className="btn btn-ghost btn-xs" href="/posts">
              編集
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input className="checkbox" type="checkbox" />
            </label>
          </th>
          <td>投稿タイトル</td>
          <td>2024/12/21</td>
          <td>下書き</td>
          <th>
            <Link className="btn btn-ghost btn-xs" href="/posts">
              編集
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input className="checkbox" type="checkbox" />
            </label>
          </th>
          <td>投稿タイトル</td>
          <td>2024/12/21</td>
          <td>公開</td>
          <th>
            <Link className="btn btn-ghost btn-xs" href="/posts">
              編集
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

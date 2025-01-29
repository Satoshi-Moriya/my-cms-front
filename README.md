# MY CMS

## ワイヤーフレーム

wfフォルダ内にHTML,CSS,JSで作成しました

参考（ https://liginc.co.jp/635478 ）

## 技術選定理由

- [Tailwind CSS](https://tailwindcss.com/)
  - CSSフレームワークにあまりこだわりはなく、Next.jsを導入するときに気軽に導入できるものだったから
  - 主はNext.jsの勉強のための個人開発だから
- [daisyUI](https://daisyui.com/)
  - Tailwind CSSで実装されているUI Libraryだから
  - 上述している通りこだわりはあまりなかったから
  - [こちら](https://zenn.dev/hatappo/articles/ae727f25a599b3)の記事を見て、githubのスター数が多く人気があり、情報量も多いと思ったから
  - shadcn/uiの方が人気だが以前少しだけ使用したことがあり、使用していないものを使ってみたかったから

## マイグレーション

データ初期投入

```
npx prisma db seed
```

データリセット

```
npx prisma migrate reset
```

## TDD

- 勉強のためにTDDを導入する
- 下記の記事を参考にできるだけTDDを実践する（あまりに生産性が落ちてしまう実装箇所などは無視してOKとする）
  - [フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする](https://zenn.dev/higa/articles/34439dc279c55dd2ab95)

## 設計

- Container/Presentationalパターンを採用
  - Server ComponentsをTesting libraryでテストできる（テストがやりやすくなる）
  - 可読性が上がる（はず）
- 参考記事
  - [Chapter13 Container/Presentationalパターン - Next.jsの考え方](https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_presentational_pattern)
  - [Container/Presentationalパターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)
  - [React Server Components のテスト手法](https://azukiazusa.dev/blog/server-components-testing/)
  - [React Server Components のテストの仕方を調べながら、手を動かす](https://zenn.dev/jordan23/scraps/36441afcb05177)

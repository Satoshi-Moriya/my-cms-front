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

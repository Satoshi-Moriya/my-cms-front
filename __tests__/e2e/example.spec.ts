// todo playwrightのテストにまだ自信がないので実装しつつ修正をしていく（現状落ちて欲しいところで落ちない）
import { test, expect } from "next/experimental/testmode/playwright";

test("topページから投稿作成ページに遷移できる", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "新規追加" }).click();

  await expect(page.getByRole("heading", { name: "記事作成・編集" })).toBeVisible();
});

// 要件
test.describe("記事を作成できるようにする", () => {
  // 仕様
  test.describe("「タイトル」に文字が入力されていない場合、「タイトルは必須です」というエラーが発生する", () => {
    test("入力欄に「タイトル」と入力したら、「タイトルは必須です」は表示されない", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.fill("input[name=title]", "テスト");

      await expect(page.getByText("タイトルは必須です")).not.toBeVisible();
    });

    test("「タイトル」に文字が入力されていない場合、「タイトルは必須です」というエラーが発生する", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.getByRole("button", { name: "保存" }).click();

      await expect(page.getByText("タイトルは必須です")).toBeVisible();
    });

    test("入力欄を選択した後、何も入力せず入力欄を離れると、「タイトルは必須です」と表示される", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.click("input[name=title]");
      await page.click("body");

      await expect(page.getByText("タイトルは必須です")).toBeVisible();
    });
  });

  test("「タイトル」に文字が100文字以上入力されている場合、「タイトルは100文字以内で入力してください」というエラーが発生する", async ({
    page,
  }) => {
    await page.goto("/posts");

    await page.fill("input[name=title]", "a".repeat(101));

    await page.click("input[name=slug]");

    await expect(page.getByText("タイトルは100文字以内で入力してください")).toBeVisible();
  });

  test.describe("「スラッグ」に文字が入力されていない場合、「スラッグは必須です」というエラーが発生する", () => {
    test("入力欄に「スラッグ」と入力したら、「スラッグは必須です」は表示されない", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.fill("input[name=slug]", "テスト");

      await expect(page.getByText("スラッグは必須です")).not.toBeVisible();
    });

    test("「スラッグ」に文字が入力されていない場合、「スラッグは必須です」というエラーが発生する", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.getByRole("button", { name: "保存" }).click();

      await expect(page.getByText("スラッグは必須です")).toBeVisible();
    });

    test("入力欄を選択した後、何も入力せず入力欄を離れると、「スラッグは必須です」と表示される", async ({
      page,
    }) => {
      await page.goto("/posts");

      await page.click("input[name=slug]");
      await page.click("body");

      await expect(page.getByText("スラッグは必須です")).toBeVisible();
    });
  });

  test("入力欄に正しい値が入力された後に、「保存」ボタンを押すと「記事が作成されました。」というメッセージが表示される", async ({
    page,
    next,
  }) => {
    next.onFetch((request) => {
      // ToDo urlは見直し
      if (request.url === "http://localhost:3000/posts/create") {
        return new Response(
          JSON.stringify({
            status: "200",
            message: "記事が作成されました。",
          }),
        );
      }

      return new Response(JSON.stringify({ status: "500" }));
    });

    await page.goto("/posts");

    await page.fill("input[name=title]", "テスト");
    await page.fill("textarea", "テストの本文");
    await page.selectOption("select", { label: "公開" });

    await page.getByRole("button", { name: "保存" }).click();

    await expect(page.getByText("記事が作成されました。")).toBeVisible();
  });

  test("「保存」ボタンを押した後に何かしらのエラーが起きた時「何かしらの不具合で記事が作成できませんでした。」というメッセージが表示される", async ({
    page,
    next,
  }) => {
    next.onFetch((request) => {
      // ToDo urlは見直し
      if (request.url === "http://localhost:3000/posts/create") {
        return new Response(
          JSON.stringify({
            status: "500",
            message: "何かしらの不具合で記事が作成できませんでした。",
          }),
        );
      }

      return new Response(JSON.stringify({ status: "200" }));
    });

    await page.goto("/posts");

    await page.fill("input[name=title]", "テスト");
    await page.fill("textarea", "テストの本文");
    await page.selectOption("select", { label: "公開" });

    await page.getByRole("button", { name: "保存" }).click();

    await expect(page.getByText("何かしらの不具合で記事が作成できませんでした。")).toBeVisible();
  });

  test("「保存」ボタンを押した後に表示されるメッセージが一定時間（5秒）経つと非表示になる", async ({
    page,
    next,
  }) => {
    next.onFetch((request) => {
      // ToDo urlは見直し
      if (request.url === "http://localhost:3000/posts/crearte") {
        return new Response(
          JSON.stringify({
            status: "200",
            message: "記事が作成されました。",
          }),
        );
      }

      return new Response(JSON.stringify({ status: "500" }));
    });

    await page.goto("/posts");

    await page.fill("input[name=title]", "テスト");
    await page.fill("textarea", "テストの本文");
    await page.selectOption("select", { label: "公開" });

    await page.getByRole("button", { name: "保存" }).click();

    await expect(page.locator(".toast")).toBeVisible();
    await expect(page.locator(".toast")).not.toBeVisible();
  });

  test("正常に記事が作成された場合、記事が編集できるようになっている（urlが編集用になっている）", async ({
    page,
    next,
  }) => {
    next.onFetch((request) => {
      // ToDo urlは見直し
      if (request.url === "http://localhost:3000/posts/create") {
        return new Response(
          JSON.stringify({
            status: "200",
            message: "記事が作成されました。",
          }),
        );
      }

      return new Response(JSON.stringify({ status: "500" }));
    });

    await page.goto("/posts");

    await page.fill("input[name=title]", "テスト");
    await page.fill("textarea", "テストの本文");
    await page.selectOption("select", { label: "公開" });

    await page.getByRole("button", { name: "保存" }).click();

    await page.waitForURL("http://localhost:3000/posts/edit");
  });
});

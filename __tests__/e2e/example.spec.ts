import { test, expect } from "@playwright/test";

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
});

import { test, expect } from "@playwright/test";

test("topページから投稿作成ページに遷移できる", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "新規追加" }).click();

  await expect(page.getByRole("heading", { name: "記事作成・編集" })).toBeVisible();
});

// ToDo 全部のテストを書き終えた後userEvent.setUp()をbeforeEach(?)などで切り出しても問題なさそうか検証する
import { describe, expect, test } from "@jest/globals";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import Page from "@/app/posts/page";

// 要件
describe("記事を作成できるようにする", () => {
  // 仕様
  describe("「タイトル」に文字が入力されていない場合、「タイトルは必須です」というエラーが発生する", () => {
    test("入力欄に「タイトル」と入力したら、「タイトルは必須です」は表示されない", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const inputTitle = screen.getByLabelText("タイトル");

      await user.type(inputTitle, "テスト");

      expect(screen.queryByText("タイトルは必須です")).not.toBeInTheDocument();
    });

    test("入力欄を選択した後、何も入力せず入力欄を離れると、「タイトルは必須です」は表示される", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const inputTitle = screen.getByLabelText("タイトル");

      await user.click(inputTitle);

      expect(screen.queryByText("タイトルは必須です")).toBeInTheDocument();
    });

    test("入力欄に何も入力せず、「保存ボタン」を押すと、「タイトルは必須です」は表示される", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const saveButton = screen.getByRole("button", { name: "保存" });

      await user.click(saveButton);

      expect(screen.queryByText("タイトルは必須です")).toBeInTheDocument();
    });
  });

  test("「タイトル」に文字が100文字以上入力されている場合、「タイトルは100文字以内で入力してください」というエラーが発生する", async () => {
    const user = userEvent.setup();
    render(<Page />);

    const inputTitle = screen.getByLabelText("タイトル");

    await user.type(
      inputTitle,
      "これは単体テストのダミーデータです。実際のデータを使用する代わりに、この文を使ってテストを行います。適切な長さの文章です。100文字オーバー",
    );

    expect(screen.queryByText("タイトルは100文字以内で入力してください")).toBeInTheDocument();
  });

  describe("「スラッグ」に文字が入力されていない場合、「スラッグは必須です」というエラーが発生する", () => {
    test("入力欄に「タイトル」と入力したら、「タイトルは必須です」は表示されない", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const inputSlug = screen.getByLabelText("スラッグ");

      await user.type(inputSlug, "テスト");

      expect(screen.queryByText("スラッグは必須です")).not.toBeInTheDocument();
    });

    test("入力欄を選択した後、何も入力せず入力欄を離れると、「スラッグは必須です」は表示される", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const inputSlug = screen.getByLabelText("スラッグ");

      await user.click(inputSlug);

      expect(screen.queryByText("スラッグは必須です")).toBeInTheDocument();
    });

    test("入力欄に何も入力せず、「保存ボタン」を押すと、「スラッグは必須です」は表示される", async () => {
      const user = userEvent.setup();
      render(<Page />);

      const saveButton = screen.getByRole("button", { name: "保存" });

      await user.click(saveButton);

      expect(screen.queryByText("スラッグは必須です")).toBeInTheDocument();
    });
  });
});

import "@testing-library/jest-dom";
import { expect, describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import Home from "../src/app/page";

describe("Home", () => {
  test("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  test("renders a text", () => {
    render(<Home />);

    const text: HTMLElement = screen.getByText("ダッシュボード");

    expect(text).toBeInTheDocument();
  });

  test("renders a text", () => {
    render(<Home />);

    const text: HTMLElement = screen.getByText("新規追加ボタン"); // 落ちるテスト

    expect(text).toBeInTheDocument();
  });
});

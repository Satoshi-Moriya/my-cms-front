import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 }); // 落ちるテスト

    expect(heading).toBeInTheDocument();
  });

  it("renders a text", () => {
    render(<Home />);

    const text = screen.getByText("ダッシュボード"); // とおるテスト

    expect(text).toBeInTheDocument();
  });
});

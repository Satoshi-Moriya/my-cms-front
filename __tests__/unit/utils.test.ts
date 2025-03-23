import { expect, test, describe } from "@jest/globals";

import { generatePagination } from "@/app/lib/utils";

describe("ページネーション", () => {
  describe("ページ数が7以下の場合", () => {
    test("ページ数が1ページかつ現在のページが1の場合、[1] を返す", () => {
      expect(generatePagination(1, 1)).toEqual([1]);
    });

    test("ページ数が7ページかつ現在のページが1の場合、[1, 2, 3, 4, 5, 6, 7] を返す", () => {
      expect(generatePagination(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test("ページ数が7ページかつ現在のページが4の場合、[1, 2, 3, 4, 5, 6, 7] を返す", () => {
      expect(generatePagination(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test("ページ数が7ページかつ現在のページが7の場合、[1, 2, 3, 4, 5, 6, 7] を返す", () => {
      expect(generatePagination(7, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe("ページ数が7より大きい場合", () => {
    // ページ数の閾値
    test('ページ数が8ページかつ1ページ目の場合、[1, 2, "...", 7, 8] を返す', () => {
      expect(generatePagination(1, 8)).toEqual([1, 2, "...", 7, 8]);
    });

    test('ページ数が8ページかつ2ページ目の場合、[1, 2, 3, "...", 7, 8] を返す', () => {
      expect(generatePagination(2, 8)).toEqual([1, 2, 3, "...", 7, 8]);
    });

    test('ページ数が8ページかつ3ページ目の場合、[1, 2, 3, 4"...", 7, 8] を返す', () => {
      expect(generatePagination(3, 8)).toEqual([1, 2, 3, 4, "...", 7, 8]);
    });

    test('ページ数が8ページかつ4ページ目の場合、[1, "...", 3, 4, 5, "...", 8] を返す', () => {
      expect(generatePagination(4, 8)).toEqual([1, "...", 3, 4, 5, "...", 8]);
    });

    test('ページ数が8ページかつ5ページ目の場合、[1, "...", 4, 5, 6, "...", 8] を返す', () => {
      expect(generatePagination(5, 8)).toEqual([1, "...", 4, 5, 6, "...", 8]);
    });

    test('ページ数が8ページかつ6ページ目の場合、[1, 2, "...", 5, 6, 7, 8] を返す', () => {
      expect(generatePagination(6, 8)).toEqual([1, 2, "...", 5, 6, 7, 8]);
    });

    test('ページ数が8ページかつ7ページ目の場合、[1, 2, "...", 6, 7, 8] を返す', () => {
      expect(generatePagination(7, 8)).toEqual([1, 2, "...", 6, 7, 8]);
    });

    test('ページ数が8ページかつ8ページ目の場合、[1, 2, "...", 7, 8] を返す', () => {
      expect(generatePagination(8, 8)).toEqual([1, 2, "...", 7, 8]);
    });

    // 閾値ではなく、とにかく大きな数値でテストする
    test('ページ数が100ページかつ1ページ目の場合、[1, 2, "...", 99, 100] を返す', () => {
      expect(generatePagination(1, 100)).toEqual([1, 2, "...", 99, 100]);
    });

    test('ページ数が100ページかつ3ページ目の場合、[1, 2, 3, 4, "...", 99, 100] を返す', () => {
      expect(generatePagination(3, 100)).toEqual([1, 2, 3, 4, "...", 99, 100]);
    });

    test('ページ数が100ページかつ4ページ目の場合、[1, "...", 3, 4, 5, "...", 100] を返す', () => {
      expect(generatePagination(4, 100)).toEqual([1, "...", 3, 4, 5, "...", 100]);
    });

    test('ページ数が100ページかつ50ページ目の場合、[1, "...", 49, 50, 51, "...", 100] を返す', () => {
      expect(generatePagination(50, 100)).toEqual([1, "...", 49, 50, 51, "...", 100]);
    });

    test('ページ数が100ページかつ50ページ目の場合、[1, "...", 49, 50, 51, "...", 100] を返す', () => {
      expect(generatePagination(50, 100)).toEqual([1, "...", 49, 50, 51, "...", 100]);
    });

    test('ページ数が100ページかつ97ページ目の場合、[1, "...", 96, 97, 98, "...", 100] を返す', () => {
      expect(generatePagination(97, 100)).toEqual([1, "...", 96, 97, 98, "...", 100]);
    });

    test('ページ数が100ページかつ98ページ目の場合、[1, 2, "...", 97, 98, 99, 100] を返す', () => {
      expect(generatePagination(98, 100)).toEqual([1, 2, "...", 97, 98, 99, 100]);
    });

    test('ページ数が100ページかつ100ページ目の場合、[1, 2, "...", 99, 100] を返す', () => {
      expect(generatePagination(100, 100)).toEqual([1, 2, "...", 99, 100]);
    });
  });
});

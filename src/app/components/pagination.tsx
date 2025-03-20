"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { generatePagination } from "../lib/utils";

export function Pagination({ totalPages = 8 }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="join py-3">
      {allPages.map((pageNumber, index) =>
        typeof pageNumber === "string" ? (
          <span className="btn btn-disabled join-item" key={index}>
            {pageNumber}
          </span>
        ) : (
          <a
            className={`btn join-item ${pageNumber === currentPage ? "btn-active" : ""}`}
            href={createPageURL(pageNumber)}
            key={index}
          >
            {pageNumber}
          </a>
        ),
      )}
    </div>
  );
}

export function generatePagination(
  currentPage: number,
  totalPages: number,
): Array<number | string> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage == 1) {
    return [1, 2, "...", totalPages - 1, totalPages];
  }

  if (currentPage == 2) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage == 3) {
    return [1, 2, 3, 4, "...", totalPages - 1, totalPages];
  }

  if (currentPage == totalPages - 2) {
    return [1, 2, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  if (currentPage == totalPages - 1) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  if (currentPage == totalPages) {
    return [1, 2, "...", totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

type PaginationCalculation = {
  total?: number;
  itemsPerPage?: number;
  currentPagination?: number;
};
/**
 * Calculate skip items
 */
const usePaginationCalculation = <PaginationCalculation>({
  total,
  itemsPerPage,
  currentPagination
}) => {
  const skip = (currentPagination - 1) * itemsPerPage;
  const pages = Math.ceil(total / itemsPerPage);
  return { skip, pages };
};
export { usePaginationCalculation };

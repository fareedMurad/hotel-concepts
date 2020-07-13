/**
 * Props
 */
type PaginationProps = {
  onChangePage: (type: number) => () => void;
  currentPage: number;
  countOfPages: number;
};

export { PaginationProps };

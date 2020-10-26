/**
 * Props
 */
type CatalogueFiltersProps = {
  /**
   * Filters data
   */
  filters: { caption: string; value: string }[];
  /**
   * Current filter
   */
  currentFilter: string;
  /**
   * On update filter
   */
  updateFilters: (type: string) => void;
};

export { CatalogueFiltersProps };

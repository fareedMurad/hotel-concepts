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
  currentFilters: string[];
  /**
   * On update filter
   */
  updateFilters: (type: string) => void;
};

export { CatalogueFiltersProps };

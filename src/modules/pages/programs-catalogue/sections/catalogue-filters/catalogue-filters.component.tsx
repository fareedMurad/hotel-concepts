import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({}) => {
  return (
    <section className={styles.catalogueFilters}>
      <div className={styles.title}>
        Filter
      </div>
    </section>
  );
};

export { CatalogueFilters };

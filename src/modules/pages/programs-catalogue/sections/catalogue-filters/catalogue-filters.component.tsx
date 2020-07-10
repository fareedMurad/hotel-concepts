import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';
import { useCatalogueFiltersData } from './catalogue-filters.hook';
import { FilterCheckbox } from '@pages/programs-catalogue/components/filter-checkbox';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({}) => {
  const {data} = useCatalogueFiltersData();

  return (
    <section className={styles.catalogueFilters}>
      <div className={styles.title}>
        Filter
      </div>
      <div className={styles.hr}></div>
      <div className={styles.filters}>
        {data.map(item => (
          <div className={styles.filterItem} key={item}>
            <FilterCheckbox name={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { CatalogueFilters };

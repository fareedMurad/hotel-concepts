import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';
import { useCatalogueFiltersData } from './catalogue-filters.hook';
import { FilterCheckbox } from '@pages/programs-catalogue/components';
import classNames from 'classnames';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({
  currentFilter,
  updateFilters
}) => {
  const { filters } = useCatalogueFiltersData();

  return (
    <section className={styles.catalogueFilters}>
      <div className={styles.title}>Filter</div>
      <div className={styles.hr} />
      <div className={styles.filters}>
        {filters.map(item => (
          <div
            className={classNames(styles.filterItem, {
              [styles.checked]: currentFilter === item
            })}
            key={item}
          >
            <FilterCheckbox
              name={item}
              isChecked={currentFilter === item}
              onCheck={() => updateFilters(item)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { CatalogueFilters };

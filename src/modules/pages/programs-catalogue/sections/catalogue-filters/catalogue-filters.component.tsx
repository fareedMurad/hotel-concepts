import { FilterCheckbox } from '@pages/programs-catalogue/components';
import classNames from 'classnames';
import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({
  filters,
  currentFilters,
  updateFilters
}) => (
  <section className={styles.catalogueFilters}>
    <div className={styles.title}>Filter</div>
    <div className={styles.hr} />
    <div className={styles.filters}>
      {filters.map(({ caption, value }, index) => (
        <div
          className={classNames(styles.filterItem, {
            [styles.checked]: currentFilters.includes(value)
          })}
          key={index}
        >
          <FilterCheckbox
            name={caption}
            isChecked={currentFilters.includes(value)}
            onCheck={() => updateFilters(value)}
          />
        </div>
      ))}
    </div>
  </section>
);

export { CatalogueFilters };

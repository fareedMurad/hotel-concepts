import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';
import { useCatalogueFiltersData } from './catalogue-filters.hook';
import { FilterCheckbox } from '@pages/programs-catalogue/components/filter-checkbox';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({ currentFilters, updateFilters }) => {
  const { data } = useCatalogueFiltersData();
  const onCheck = index => ({ target: { checked } }) => {
    let data = [...currentFilters];
    if (checked) {
      data.push(index);
      updateFilters(data);
    } else {
      data = currentFilters.filter(item => item != index);
      updateFilters(data);
    }
  }

  return (
    <section className={styles.catalogueFilters}>
      <div className={styles.title}>
        Filter
      </div>
      <div className={styles.hr}></div>
      <div className={styles.filters}>
        {data.map((item, index) => (
          <div className={styles.filterItem} key={item}>
            <FilterCheckbox
              name={item}
              isChecked={currentFilters.includes(index)}
              onCheck={onCheck(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { CatalogueFilters };

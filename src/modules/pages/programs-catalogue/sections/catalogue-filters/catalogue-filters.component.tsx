import * as React from 'react';
import { CatalogueFiltersProps } from './catalogue-filters.props';
import * as styles from './catalogue-filters.scss';
import { useCatalogueFiltersData } from './catalogue-filters.hook';
import { FilterCheckbox } from '@pages/programs-catalogue/components/filter-checkbox';

/**
 * Renders CatalogueFilters
 */
const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({ updateFilters }) => {
  const {data} = useCatalogueFiltersData();
  const [activatedFilters, setActivatedFilters] = React.useState([0]);
  const onCheck = index => ({ target: { checked } }) => {
    let data = [...activatedFilters];
    if (checked) {
      data.push(index);
      setActivatedFilters(data);
    } else {
      data = activatedFilters.filter(item => item != index);
      setActivatedFilters(data);
    }
  }

  React.useEffect(() => {
    updateFilters(activatedFilters);
  }, [activatedFilters]);

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
              isChecked={activatedFilters.includes(index)}
              onCheck={onCheck(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { CatalogueFilters };

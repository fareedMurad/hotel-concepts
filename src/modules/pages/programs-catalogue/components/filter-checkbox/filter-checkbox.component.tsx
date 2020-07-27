import * as React from 'react';
import { FilterCheckboxProps } from './filter-checkbox.props';
import * as styles from './filter-checkbox.scss';

/**
 * Renders FilterCheckbox
 */
const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  name,
  isChecked,
  onCheck
}) => {
  return (
    <label className={styles.filterCheckbox}>
      <input
        className={styles.checkbox}
        name='isGoing'
        type='checkbox'
        checked={isChecked}
        onChange={onCheck}
      />
      <span />
      {name}
    </label>
  );
};

export { FilterCheckbox };

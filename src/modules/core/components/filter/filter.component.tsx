import * as React from 'react';
import { FilterProps } from './filter.props';
import * as styles from './filter.scss';
import classNames from 'classnames';

/**
 * Renders Filter
 */
const Filter: React.FC<FilterProps> = ({ title, count, onClick, active }) => {
  return (
    <div
      className={classNames(styles.filter, {
        [styles.filterActive]: active
      })}
      onClick={onClick}
    >
      <div className={styles.filterTitle}>{title}</div>
      <div
        className={classNames(styles.filterCount, {
          [styles.filterCountActive]: active
        })}
      >
        ({count})
      </div>
    </div>
  );
};

export { Filter };

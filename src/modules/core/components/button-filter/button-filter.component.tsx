import * as React from 'react';
import { ButtonFilterProps } from './button-filter.props';
import * as styles from './button-filter.scss';
import classNames from 'classnames';

/**
 * Renders Filter
 */
const ButtonFilter: React.FC<ButtonFilterProps> = ({
  title,
  count,
  onClick,
  active
}) => {
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

export { ButtonFilter };

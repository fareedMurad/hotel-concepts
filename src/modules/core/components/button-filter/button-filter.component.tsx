import * as React from 'react';
import { ButtonFilterProps } from './button-filter.props';
import * as styles from './button-filter.scss';
import classNames from 'classnames';
import { Icon } from '../icon';

/**
 * Renders Filter
 */
const ButtonFilter: React.FC<ButtonFilterProps> = ({
  title,
  count,
  onClick,
  active,
  icon,
  className
}) => {
  return (
    <div
      className={classNames(styles.filter, className, {
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
        {count && `(${count})`}
        {icon && <Icon name={icon} className={styles.icon} />}
      </div>
    </div>
  );
};

export { ButtonFilter };

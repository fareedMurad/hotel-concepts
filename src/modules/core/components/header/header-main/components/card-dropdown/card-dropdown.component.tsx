import * as React from 'react';
import { CardDropdownProps } from './card-dropdown.props';
import * as styles from './card-dropdown.scss';
import classNames from 'classnames';
/**
 * Renders CardDropdown
 */
const CardDropdown: React.FC<CardDropdownProps> = ({
  className,
  children,
  onMouseLeave
}) => {
  return (
    <div
      className={classNames(className, styles.card)}
      onMouseLeave={onMouseLeave}
    >
      <div className={classNames(styles.content)}>{children}</div>
    </div>
  );
};

export { CardDropdown };

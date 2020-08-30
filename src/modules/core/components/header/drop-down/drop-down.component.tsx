import * as React from 'react';
import { DropDownProps } from './drop-down.props';
import * as styles from './drop-down.scss';

/**
 * Renders DropDown
 */
const DropDown: React.FC<DropDownProps> = ({}) => {
  return <div className={styles.dropDown}></div>;
};

export { DropDown };

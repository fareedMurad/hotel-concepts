import * as React from 'react';
import { ProgramNavButtonProps } from './program-nav-button.props';
import * as styles from './program-nav-button.scss';

/**
 * Renders ProgramNavButton
 */
const ProgramNavButton: React.FC<ProgramNavButtonProps> = ({ index, name, anchor }) => {
  return (
    <a href={anchor} className={styles.programNavButton}>
      <div>{index+1}.0</div>
      <div>{name}</div>
    </a>
  );
};

export { ProgramNavButton };

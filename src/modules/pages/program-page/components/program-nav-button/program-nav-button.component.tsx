import * as React from 'react';
import { ProgramNavButtonProps } from './program-nav-button.props';
import * as styles from './program-nav-button.scss';

/**
 * Renders ProgramNavButton
 */
const ProgramNavButton: React.FC<ProgramNavButtonProps> = ({ index, name }) => {
  return (
    <div className={styles.programNavButton}>
      <div>{index+1}.0</div>
      <div>{name}</div>
    </div>
  );
};

export { ProgramNavButton };

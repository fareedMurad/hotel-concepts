import * as React from 'react';
import { ProgramNavButtonProps } from './program-nav-button.props';
import * as styles from './program-nav-button.scss';
import { scrollTo } from '@core/helpers/scroll-to.helper';

/**
 * Renders ProgramNavButton
 */
const ProgramNavButton: React.FC<ProgramNavButtonProps> = ({ index, name, anchor }) => {
  const onHandleClick = () => {
    scrollTo(anchor);
  }

  return (
    <div onClick={onHandleClick} className={styles.programNavButton}>
      <div>{index + 1}.0</div>
      <div>{name}</div>
    </div>
  );
};

export { ProgramNavButton };

import * as React from 'react';
import { ProgramsButtonProps } from './programs-button.props';
import * as styles from './programs-button.scss';
import { Icon } from '@core/components/icon';
import classNames from 'classnames';

/**
 * Renders ProgramsButton
 */
const ProgramsButton: React.FC<ProgramsButtonProps> = ({ openMenu, isInverted, isOpened }) => {
  return (
    <div onClick={openMenu} className={classNames(styles.programsButton, {[styles.inverted]: isInverted})}>
      <div>Programs</div>
      <Icon
        name={'arrow-down-g'}
        className={classNames(styles.icon, {[styles.opened]: isOpened})}
      />
    </div>
  );
};

export { ProgramsButton };

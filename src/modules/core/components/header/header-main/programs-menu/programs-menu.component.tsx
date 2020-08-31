import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs.hook';
import { DropDown } from '../../drop-down';
import { Icon } from '@core/components';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<any> = ({
  className,
  toggleDropDown,
  onClick
}) => {
  const { programsData, programsLoading } = useProgramsMenuData();
  if (programsLoading) return <div></div>;

  return (
    <React.Fragment>
      <div onClick={onClick} className={className}>
        Programs <span className={styles.arrow}>&#x25BE;</span>
      </div>

      <DropDown show={toggleDropDown} subLinks={programsData} />
    </React.Fragment>
  );
};

export { ProgramsMenu };

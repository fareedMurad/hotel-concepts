import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs-menu.hooks';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<ProgramsMenuProps> = ({ closeMenu, isOpened }) => {
  const { programs } = useProgramsMenuData();
  return (
    <div className={classNames(styles.programsMenu, {[styles.opened]: isOpened})}>
      <div onClick={closeMenu} className={styles.blur}></div>
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {programs.map((program, i) => (
            <NavLink to={program.path} key={i} className={styles.link} onClick={closeMenu}>
              <div className={styles.linkName}>
                {program.name}
              </div>
              <div className={styles.description}>
                {program.description}
              </div>
              <div className={styles.separator}></div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProgramsMenu };

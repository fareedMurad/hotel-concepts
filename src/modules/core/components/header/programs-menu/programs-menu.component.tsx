import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs-menu.hooks';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Spinner } from '@core/components';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<ProgramsMenuProps> = ({ closeMenu, isOpened }) => {
  const { programsData, programsLoading } = useProgramsMenuData();
  const [isFullHide, setFullHide] = React.useState(true);

  React.useEffect(() => {
    if (isOpened) {
      setFullHide(false);
      return;
    }
    const timeout = setTimeout(() => {
      setFullHide(true);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpened]);

  return (
    <div
      className={classNames(styles.programsMenu, {
        [styles.opened]: isOpened,
        [styles.hidden]: isFullHide
      })}
    >
      <div onClick={closeMenu} className={styles.blur} />
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {programsLoading ? (
            <Spinner />
          ) : (
            programsData.map((category, i) => (
              <NavLink
                to={
                  category.sys ? `/programs-catalogue/${category.sys.id}` : '/'
                }
                key={i}
                className={styles.link}
                onClick={closeMenu}
              >
                <div className={styles.linkName}>{category.name}</div>
                <div className={styles.description}>{category.subtitle}</div>
                <div className={styles.separator} />
              </NavLink>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { ProgramsMenu };

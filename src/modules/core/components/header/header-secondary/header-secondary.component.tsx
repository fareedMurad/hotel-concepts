import * as React from 'react';
import * as styles from './header-secondary.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useMediaPoints } from '@core/shared';
import { useMenuData } from './header-secondary.hooks';
import { useHeaderMainData } from '../header-main/hooks';

/**
 * Renders HeaderSecondary
 */
const HeaderSecondary: React.FC = () => {
  const { pagesLinks } = useMenuData();
  const { whiteHeader } = useHeaderMainData();

  return (
    <div className={styles.headerSecondary}>
      <div className={styles.headerSecondaryMain}>
        {pagesLinks.map((el, idx) => {
          return (
            <NavLink
              key={idx}
              className={classNames(styles.headerSecondaryLink, {
                [styles.invertedHeader]: whiteHeader
              })}
              to={el.path}
            >
              {el.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export { HeaderSecondary };

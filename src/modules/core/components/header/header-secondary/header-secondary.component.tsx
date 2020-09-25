import * as React from 'react';
import { HeaderSecondaryProps } from './header-secondary.props';
import * as styles from './header-secondary.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useMediaPoints } from '@core/shared';
import { useMenuData } from './header-secondary.hooks';

/**
 * Renders HeaderSecondary
 */
const HeaderSecondary: React.FC<HeaderSecondaryProps> = ({
  whiteBackground
}) => {
  const { mobile } = useMediaPoints();
  const { pagesLinks } = useMenuData();

  return (
    <div className={styles.headerSecondary}>
      {!mobile && (
        <div className={styles.headerSecondaryMain}>
          {pagesLinks.map((el, idx) => {
            return (
              <NavLink
                key={idx}
                className={classNames(styles.headerSecondaryLink, {
                  [styles.invertedHeader]: whiteBackground
                })}
                to={el.path}
              >
                {el.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { HeaderSecondary };

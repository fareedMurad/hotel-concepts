import { Icon } from '@core/components';
import { usePrefixedRoutes } from '@core/shared';
import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useMyProgramsData } from './my-programs.hook';
import * as styles from './my-programs.scss';
import { Purchased } from './purchased';
import { Wishlist } from './wishlist';

/**
 * Renders MyPrograms
 */
const MyPrograms: React.FC = () => {
  const [purchased, wishlist] = usePrefixedRoutes(['purchased', 'wishlist']);
  const { navigation, matchWishlist } = useMyProgramsData();

  return (
    <div className={styles.myPrograms}>
      <div className={styles.title}>My programs</div>
      <div className={styles.navigation}>
        {navigation.map(({ label, to, withIcon }, index) => (
          <NavLink
            className={styles.link}
            activeClassName={styles.linkActive}
            to={to}
            key={index}
          >
            {label}
            {withIcon && (
              <Icon
                className={styles.linkIcon}
                name={`${matchWishlist ? 'heart' : 'like'}`}
              />
            )}
          </NavLink>
        ))}
      </div>

      <div className={styles.content}>
        <Route path={purchased} component={Purchased} />
        <Route path={wishlist} component={Wishlist} />
      </div>
    </div>
  );
};

export { MyPrograms };

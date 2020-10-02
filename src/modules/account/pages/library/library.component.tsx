import { Icon } from '@core/components';
import { usePrefixedRoutes } from '@core/shared';
import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useLibraryData } from './library.hook';
import * as styles from './library.scss';
import { Purchased } from './purchased';
import { Whishlist } from './whishlist';

/**
 * Renders Library
 */
const Library: React.FC = () => {
  const [wishlist, purchased] = usePrefixedRoutes(['wishlist', 'purchased']);
  const { navigation, matchWishlist } = useLibraryData();

  return (
    <div className={styles.library}>
      <div className={styles.title}>My bookshelf</div>
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
        <Route path={wishlist} component={Whishlist} />
      </div>
    </div>
  );
};

export { Library };

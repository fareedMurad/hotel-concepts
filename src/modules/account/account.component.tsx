import * as React from 'react';
import * as styles from './account.scss';
import { Route } from 'react-router';
import { usePrefixedRoutes } from '@core/shared';
import { Profile, Subscription, Library, Programs } from './pages';
import { useAccountData } from './account.hook';
import { NavLink } from 'react-router-dom';

/**
 * Renders Account
 */
const Account: React.FC = () => {
  const { navigation } = useAccountData();
  const [profile, subscription, library, programs] = usePrefixedRoutes([
    'profile',
    'subscription',
    'library',
    'programs'
  ]);

  return (
    <div className={styles.account}>
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${require('img/my-account-hero.png')})`
        }}
      />
      <div className={styles.navigation}>
        <div className={styles.title}>My account</div>
        <div className={styles.links}>
          {navigation.map(({ caption, to }, index) => (
            <NavLink
              className={styles.link}
              activeClassName={styles.linkActive}
              to={to}
              key={index}
            >
              <span className={styles.linkIndex}>{index + 1}.0</span>
              <span className={styles.linkCaption}>{caption}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <Route path={profile} component={Profile} />
        <Route path={subscription} component={Subscription} />
        <Route path={library} component={Library} />
        <Route path={programs} component={Programs} />
      </div>
    </div>
  );
};

export { Account };

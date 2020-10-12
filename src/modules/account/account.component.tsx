import { usePrefixedRoutes } from '@core/shared';
import classNames from 'classnames';
import * as React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAccountData } from './account.hook';
import * as styles from './account.scss';
import { Library, MyPrograms, Profile, Subscription } from './pages';

/**
 * Renders Account
 */
const Account: React.FC = () => {
  const { navigation, verified } = useAccountData();
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
          {navigation.map(({ caption, to, active }, index) => (
            <NavLink
              className={classNames(styles.link, {
                [styles.linkActive]: active,
                [styles.linkNotEnabled]: !verified
              })}
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
        <Route path={programs} component={MyPrograms} />
      </div>
    </div>
  );
};

export { Account };

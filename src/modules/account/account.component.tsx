import * as React from 'react';
import { AccountProps } from './account.props';
import * as styles from './account.scss';
import { Route } from 'react-router';
import { usePrefixedRoutes } from '@core/shared';
import { Profile, Subscription, Library, Programs } from './pages';

/**
 * Renders Account
 */
const Account: React.FC<AccountProps> = ({}) => {
  const [profile, subscription, library, programs] = usePrefixedRoutes([
    'profile',
    'subscription',
    'library',
    'programs'
  ]);

  return (
    <div className={styles.account}>
      <Route path={profile} component={Profile} />
      <Route path={subscription} component={Subscription} />
      <Route path={library} component={Library} />
      <Route path={programs} component={Programs} />
    </div>
  );
};

export { Account };

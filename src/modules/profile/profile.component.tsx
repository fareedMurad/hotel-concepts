import * as React from 'react';
import * as styles from './profile.scss';
import { useProfileData } from './profile.hook';
import { usePrefixedRoutes } from '@core/shared';
import { NavLink, Route } from 'react-router-dom';
import { UserInfo, Security, Settings } from './pages';
import { Switch } from '@core/components';

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { navigation } = useProfileData();
  const [userInfo, security, settings] = usePrefixedRoutes([
    'user-info',
    'security',
    'settings'
  ]);

  return (
    <div className={styles.profile}>
      <div className={styles.navigation}>
        {navigation.map(({ to, caption }, index) => (
          <NavLink
            className={styles.link}
            activeClassName={styles.linkActive}
            to={to}
            key={index}
          >
            {caption}
          </NavLink>
        ))}
      </div>
      <div className={styles.content}>
        <Route path={userInfo} component={UserInfo} />
        <Route path={security} component={Security} />
        <Route path={settings} component={Settings} />
      </div>
    </div>
  );
};

export { Profile };

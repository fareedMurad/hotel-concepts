import { Icon } from '@core/components';
import { toggleCookieBanner } from '@general/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './cookie-banner.scss';

/**
 * Renders CookieBanner
 */
const CookieBanner: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.text}>
        This website uses technical, customisation and analytical cookies, both
        first-party and third-party to facilitate browsing and analyse
        statistics on use of the website. Learn more
      </div>
      <Icon
        className={styles.icon}
        name='marketplace/close'
        onClick={() => dispatch(toggleCookieBanner(false))}
      />
    </div>
  );
};

export { CookieBanner };

import * as React from 'react';
import * as styles from './header-mobile.scss';
import { useState, useEffect } from 'react';
import { Burger } from './components/burger';
import { Icon } from '@core/components/icon';
import { NavLink, useLocation } from 'react-router-dom';
import { useBurgerTransition } from './components/burger/burger.animation';
import classNames from 'classnames';
import { useHeaderMainData } from '../header-main/hooks';
import { LocalizationMenu } from '../header-main/menus';

/**
 * Renders HeaderMobile
 */
const HeaderMobile: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const { transition } = useBurgerTransition(showBurger);
  const { pathname } = useLocation();
  const { whiteHeader } = useHeaderMainData();

  /**
   * close burger on url change and handle theme
   */
  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.pageYOffset > 0 ? setStickyHeader(true) : setStickyHeader(false)
    );
    return () => {
      setShowBurger(false);
    };
  }, [pathname]);

  return (
    <div
      className={classNames(styles.headerMobile, {
        [styles.whiteHeader]: whiteHeader || stickyHeader
      })}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={whiteHeader || stickyHeader ? 'logo-b' : 'logo'} />
      </NavLink>
      <div className={styles.controll}>
        <LocalizationMenu
          className={styles.localization}
          blackTheme={whiteHeader || stickyHeader}
        />
        <Icon
          name={showBurger ? 'close-modal' : 'burger'}
          onClick={() => setShowBurger(!showBurger)}
        />
      </div>
      {transition.map(
        ({ item, key, props }) => item && <Burger transition={props} />
      )}
    </div>
  );
};

export { HeaderMobile };

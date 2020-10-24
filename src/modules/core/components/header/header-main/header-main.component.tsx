import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@core/components';
import classNames from 'classnames';
import { useClickOutside, useMediaPoints } from '@core/shared';
import { LocalizationMenu } from './menus/localization-menu';
import { ProfileMenu } from './menus/profile-menu';
import { useHeaderMainData } from './hooks/header-main.hook';
import { AboutMenu } from './menus/about-menu';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@router/store';
import { Burger } from './burger';
import { useEffect, useState } from 'react';
import { useIconAnimation } from './hooks/burger-icon-animation';
import { animated } from 'react-spring';

import { State } from '@app/redux/state';
import { ProgramsMenu } from './menus/programs-menu';
import { LibraryMenu } from './menus/library-menu';
import { CorporateMenu } from './menus/corporate-menu';
import { CartMenu } from './menus/cart-menu';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({ isSticky }) => {
  /**
   * isSticky calls many rerenders (needs to be fixed)
   */
  const dispatch = useDispatch();
  const { blackTheme } = useHeaderMainData();
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);
  const [white, setWhite] = useState(false);
  const { iconRotation } = useIconAnimation(showBurger);

  const className = classNames(styles.headerMainNavigationItem, {
    [styles.invertedHeader]: blackTheme || isSticky
  });

  const { mobile, tablet } = useMediaPoints(true);

  return (
    <div
      style={{ backgroundColor: (blackTheme || isSticky) && 'white' }}
      className={styles.headerMain}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={blackTheme || isSticky ? 'logo-b' : 'logo'} />
      </NavLink>
      {mobile || tablet ? (
        <div className={styles.mobileMenu}>
          <animated.div style={iconRotation} className={styles.burgerIcon}>
            <Icon
              name='burger'
              className={classNames({
                [styles.activeBurger]: showBurger
              })}
              onClick={() => setShowBurger(!showBurger)}
            />
          </animated.div>
          <Burger showBurger={showBurger} />
        </div>
      ) : (
        <div className={styles.headerMainNavigation}>
          <ProgramsMenu className={className} />
          <LibraryMenu className={className} />
          <CorporateMenu className={className} />
          <AboutMenu className={className} />
          <CartMenu blackTheme={blackTheme || isSticky} />
          <ProfileMenu blackTheme={blackTheme || isSticky} />
          <LocalizationMenu
            className={className}
            blackTheme={blackTheme || isSticky}
          />
        </div>
      )}
    </div>
  );
};

export { HeaderMain };

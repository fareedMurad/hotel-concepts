import * as React from 'react';

import * as styles from './header-main.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@core/components';
import classNames from 'classnames';
import { useClickOutside, useMediaPoints } from '@core/shared';
import { LocalizationMenu } from './menus/localization-menu';
import { ProfileMenu } from './menus/profile-menu';
import { useHeaderMainData } from './hooks/header-main.hook';
import { AboutMenu } from './menus/about-menu';
import { useEffect } from 'react';
import { ProgramsMenu } from './menus/programs-menu';
import { LibraryMenu } from './menus/library-menu';
import { CorporateMenu } from './menus/corporate-menu';
import { CartMenu } from './menus/cart-menu';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC = () => {
  const { whiteHeader, stickyHeader } = useHeaderMainData();
  const blackTheme = whiteHeader || stickyHeader;
  const className = classNames(styles.headerMainNavigationItem, {
    [styles.invertedHeader]: blackTheme
  });

  return (
    <div
      style={{
        backgroundColor: blackTheme && 'white'
      }}
      className={styles.headerMain}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={blackTheme ? 'logo-b' : 'logo'} />
      </NavLink>
      <div className={styles.headerMainNavigation}>
        <ProgramsMenu className={className} />
        <LibraryMenu className={className} />
        <CorporateMenu className={className} />
        <AboutMenu className={className} />
        <CartMenu />
        <ProfileMenu blackTheme={blackTheme} />
        <LocalizationMenu theme={blackTheme ? 'black' : 'primary'} />
      </div>
    </div>
  );
};

export { HeaderMain };

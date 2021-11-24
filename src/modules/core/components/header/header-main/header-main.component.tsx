import { Icon } from '@core/components';
import { useMediaPoints } from '@core/shared';
import classNames from 'classnames';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as styles from './header-main.scss';
import { useHeaderMainData } from './hooks/header-main.hook';
import {
  AboutMenu,
  CartMenu,
  CorporateMenu,
  LibraryMenu,
  LocalizationMenu,
  ProfileMenu,
  ProgramsMenu
} from './menus';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC = () => {
  const { whiteHeader, stickyHeader } = useHeaderMainData();
  const blackTheme = whiteHeader || stickyHeader;
  const className = classNames(styles.headerMainNavigationItem, {
    [styles.invertedHeader]: blackTheme
  });
  const { pathname } = useLocation();
  const match = pathname === '/about-us' || pathname.includes('/program/');

  //remove in future
  const { mobile } = useMediaPoints();

  return (
    <div
      style={{
        backgroundColor: blackTheme && 'white'
      }}
      className={styles.headerMain}
    >
      {/* <NavLink className={styles.logo} to='/'>
        {mobile ? (
          <Icon name={blackTheme || match ? 'logo-b' : 'logo'} />
        ) : (
          <Icon name={blackTheme || match ? 'logo-b' : 'logo-copy'} />
        )}
      </NavLink> */}
      <NavLink className={styles.logo} to='/'>
        {mobile ? <Icon name={'new-logo-b'} /> : <Icon name={'new-logo-b'} />}
      </NavLink>
      <div className={styles.headerMainNavigation}>
        <ProgramsMenu className={className} />
        {/* <LibraryMenu className={className} /> */}
        <CorporateMenu className={className} />
        <AboutMenu className={className} />
        <ProfileMenu blackTheme={blackTheme} />
        <CartMenu />
        {/* <LocalizationMenu theme={blackTheme ? 'black' : 'primary'} /> */}
      </div>
    </div>
  );
};

export { HeaderMain };

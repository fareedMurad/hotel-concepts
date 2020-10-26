import { Icon } from '@core/components';
import classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
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
  const className = classNames(styles.headerMainNavigationItem, {
    [styles.invertedHeader]: whiteHeader || stickyHeader
  });

  return (
    <div
      style={{
        backgroundColor: (whiteHeader || stickyHeader) && 'white'
      }}
      className={styles.headerMain}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={whiteHeader || stickyHeader ? 'logo-b' : 'logo'} />
      </NavLink>
      <div className={styles.headerMainNavigation}>
        <ProgramsMenu className={className} />
        <LibraryMenu className={className} />
        <CorporateMenu className={className} />
        <AboutMenu className={className} />
        <CartMenu blackTheme={whiteHeader || stickyHeader} />
        <ProfileMenu blackTheme={whiteHeader || stickyHeader} />
        <LocalizationMenu
          className={className}
          blackTheme={whiteHeader || stickyHeader}
        />
      </div>
    </div>
  );
};

export { HeaderMain };

import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@core/components';
import classNames from 'classnames';
import { useMediaPoints } from '@core/shared';
import { LocalizationMenu } from './menus/localization-menu';
import { ProfileMenu } from './menus/profile-menu';
import { useHeaderMainData } from './hooks/header-main.hook';
import { Dropdown } from './components/dropdown';
import { AboutMenu } from './menus/about-menu';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const { menus } = useHeaderMainData();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = React.useState('');
  const [white, setWhite] = React.useState(false);
  const [
    showProfileNavigationMenu,
    setShowProfileNavigationMenu
  ] = React.useState(false);
  React.useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
    return () => setSelectedMenu('');
  }, [isSticky, location.pathname]);

  const selectMenu = menu => {
    setSelectedMenu('');
    setSelectedMenu(menu);
  };

  const { mobile, tablet } = useMediaPoints(true);

  return (
    <div
      style={{ backgroundColor: white ? 'white' : 'transparent' }}
      className={styles.headerMain}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={whiteBackground || isSticky ? 'logo-b' : 'logo'} />
      </NavLink>
      {mobile || tablet ? (
        <div className={styles.mobileMenu}>
          <Icon name='burger' />
        </div>
      ) : (
        <div className={styles.headerMainNavigation}>
          {menus.map(menu => {
            const {
              content: { links, title, flexDirection },
              programs
            } = menu;
            return (
              <div
                className={classNames(styles.headerMainNavigationItem, {
                  [styles.invertedHeader]: whiteBackground || isSticky
                })}
                key={menu.name}
                onClick={() => selectMenu(menu.name)}
              >
                {menu.name}
                <span className={styles.arrow}>&#x25BE;</span>
                {selectedMenu === menu.name && (
                  <Dropdown
                    setSelectedMenu={setSelectedMenu}
                    programs={programs}
                    links={links}
                    title={title}
                    flexDirection={flexDirection}
                  />
                )}
              </div>
            );
          })}

          <AboutMenu
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />

          <div className={styles.cart}>
            <Icon
              name='shopping-cart'
              fill={whiteBackground || isSticky ? 'black' : 'white'}
            />
          </div>

          <div className={styles.headerMainNavigationProfile}>
            <div className={styles.profileNavigation}>
              <Icon
                onClick={() => setShowProfileNavigationMenu(true)}
                name={
                  whiteBackground || isSticky
                    ? 'default-avatar-b'
                    : 'default-avatar'
                }
              />

              {showProfileNavigationMenu && (
                <ProfileMenu
                  setShowProfileNavigationMenu={setShowProfileNavigationMenu}
                />
              )}
            </div>

            <LocalizationMenu
              className={classNames(styles.local, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
              iconName={
                whiteBackground || isSticky ? 'triangle-arr-b' : 'triangle-arr'
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { HeaderMain };

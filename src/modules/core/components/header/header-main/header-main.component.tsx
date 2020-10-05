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
import { AboutMenu } from './menus/about-menu';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { Dropdown } from './components';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const dispatch = useDispatch();
  const { menus, cartQuantity } = useHeaderMainData();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('');
  const [white, setWhite] = useState(false);

  useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
    return () => setSelectedMenu('');
  }, [isSticky, location.pathname]);

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
                onMouseOver={() => setSelectedMenu(menu.name)}
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
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />

          <div
            className={styles.cart}
            onClick={() => dispatch(navigate('/cart'))}
          >
            <Icon
              name='shopping-cart'
              fill={whiteBackground || isSticky ? 'black' : 'white'}
            />
            {cartQuantity > 0 && (
              <div className={styles.indicator}>{cartQuantity}</div>
            )}
          </div>

          <div className={styles.headerMainNavigationProfile}>
            <div
              className={styles.profileNavigation}
              onMouseEnter={() => {
                setSelectedMenu('Profile');
              }}
            >
              <Icon
                name={
                  whiteBackground || isSticky
                    ? 'default-avatar-b'
                    : 'default-avatar'
                }
              />
              {selectedMenu === 'Profile' && (
                <ProfileMenu setSelectedMenu={setSelectedMenu} />
              )}
            </div>

            <LocalizationMenu
              setSelectedMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
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

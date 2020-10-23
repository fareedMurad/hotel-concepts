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
import { Dropdown } from './components';
import { Burger } from './burger';
import { useEffect, useState } from 'react';
import { useIconAnimation } from './hooks/burger-icon-animation';
import { animated } from 'react-spring';
import { CartMenu } from './menus/cart-menu';
import { State } from '@app/redux/state';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const { addedProduct } = useSelector((state: State) => state.cart);
  const dispatch = useDispatch();
  const { menus, cartQuantity } = useHeaderMainData();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('');
  const [showBurger, setShowBurger] = useState(false);
  const [white, setWhite] = useState(false);
  const { iconRotation } = useIconAnimation(showBurger);
  useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
    setShowBurger(false);
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
            onMouseOver={() => setSelectedMenu('Cart')}
          >
            <Icon
              name='shopping-cart'
              fill={whiteBackground || isSticky ? 'black' : 'white'}
            />
            {cartQuantity > 0 && (
              <div className={styles.indicator}>{cartQuantity}</div>
            )}
            {/* {selectedMenu === 'Cart' && <CartMenu />} */}
            {addedProduct && <CartMenu />}
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

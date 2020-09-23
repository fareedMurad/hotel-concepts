import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink } from 'react-router-dom';
import { Icon, Button } from '@core/components';
import classNames from 'classnames';
import { useMediaPoints, useClickOutside } from '@core/shared';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramsMenu } from './components/programs-menu/programs-menu.component';
import { Spinner } from '@core/components/spinner';
import { LocalizationMenu } from './components/localization-menu';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { AboutMenu } from './components/about-menu';
import { StoreMenu } from './components/store-menu';
import { navigate } from '@router/store';
import { unauthorize } from '@app/redux/auth';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const [white, setWhite] = React.useState(false);
  const { authorized } = useSelector((state: State) => state.auth);
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const dispatch = useDispatch();
  const [
    showProfileNavigationMenu,
    setShowProfileNavigationMenu
  ] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const profileMenuRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    setToggleDropDown(false);
  });
  useClickOutside(profileMenuRef, () => {
    setShowProfileNavigationMenu(false);
  });

  React.useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
  }, [isSticky]);

  const { mobile } = useMediaPoints();
  const handleMenuClick = () => {
    setToggleDropDown(!toggleDropDown);
  };
  const { t } = useTranslation();

  /**
   * auth
   */

  return (
    <div
      style={{ backgroundColor: white ? 'white' : 'transparent' }}
      className={styles.headerMain}
    >
      <NavLink className={styles.logo} to={'/'}>
        <Icon name={whiteBackground || isSticky ? 'logo-b' : 'logo'} />
      </NavLink>
      {mobile ? (
        <div className={styles.mobileMenu}>
          <Icon name='burger' />
        </div>
      ) : (
        <div className={styles.headerMainNavigation}>
          <div className={styles.headerMainNavigationBlock} ref={ref}>
            <ProgramsMenu
              className={classNames(styles.headerMainNavigationItem, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
              onClick={() => {
                handleMenuClick();
              }}
              toggleDropDown={toggleDropDown}
            />
          </div>
          <div className={styles.headerMainNavigationBlock} ref={ref}>
            <AboutMenu
              className={classNames(styles.headerMainNavigationItem, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
            />
          </div>
          <div className={styles.headerMainNavigationBlock} ref={ref}>
            <StoreMenu
              className={classNames(styles.headerMainNavigationItem, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
            />
          </div>

          {/* {navigation.map(el => {
            return (
              <div
                key={el.id}
                className={styles.headerMainNavigationBlock}
                ref={ref}
              >
                <div
                  className={classNames(styles.headerMainNavigationItem, {
                    [styles.invertedHeader]: whiteBackground || isSticky
                  })}
                  onClick={() => {
                    handleMenuClick(el);
                  }}
                >
                  {el.title}{' '}
                  <Icon
                    name={
                      whiteBackground || isSticky
                        ? 'triangle-arr-b'
                        : 'triangle-arr'
                    }
                  />
                </div>
                {toggleDropDown && dropDownId === el.id && (
                  <DropDown sublinks={el.subLinks} />
                )}
              </div>
            );
          })} */}
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
              {showProfileNavigationMenu &&
                (authorized ? (
                  <div
                    className={styles.profileNavigationMenu}
                    ref={profileMenuRef}
                  >
                    <NavLink to={'/account/profile'}>my Account</NavLink>
                    <NavLink to={'/account/subscription'}>
                      my Subscription
                    </NavLink>
                    <NavLink to={'/account/library/purchased'}>
                      my Library
                    </NavLink>
                    <NavLink to={'/account/programs/purchased'}>
                      my Programs
                    </NavLink>
                    <Button onClick={() => dispatch(unauthorize())}>
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div
                    className={styles.profileNavigationMenu}
                    ref={profileMenuRef}
                  >
                    <Button
                      width={'100%'}
                      onClick={() => {
                        dispatch(navigate('/auth/login'));
                        setShowProfileNavigationMenu(false);
                      }}
                    >
                      Log in
                    </Button>
                  </div>
                ))}
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

import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink } from 'react-router-dom';
import { Icon, Button } from '@core/components';
import classNames from 'classnames';
import { useMediaPoints, useClickOutside } from '@core/shared';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramsMenu } from './menus/programs-menu/programs-menu.component';
import { LocalizationMenu } from './menus/localization-menu';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { AboutMenu } from './menus/about-menu';
import { LibraryMenu } from './menus/library-menu';
import { navigate } from '@router/store';
import { unauthorize } from '@app/redux/auth';
import { ProfileMenu } from './menus/profile-menu';
import { CorporateMenu } from './menus/corporate-menu';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const [white, setWhite] = React.useState(false);
  const [
    showProfileNavigationMenu,
    setShowProfileNavigationMenu
  ] = React.useState(false);

  React.useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
  }, [isSticky]);

  const { mobile } = useMediaPoints();

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
          <ProgramsMenu
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />
          <LibraryMenu
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />
          <CorporateMenu
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />
          <AboutMenu
            className={classNames(styles.headerMainNavigationItem, {
              [styles.invertedHeader]: whiteBackground || isSticky
            })}
          />
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

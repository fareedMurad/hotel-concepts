import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '@core/components';
import classNames from 'classnames';
import { useMediaPoints, useClickOutside } from '@core/shared';
import { DropDown } from '../drop-down';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramsMenu } from './components/programs-menu/programs-menu.component';
import { Spinner } from '@core/components/spinner';
import { LocalizationMenu } from './components/localization-menu';
import { State } from '@app/store/state';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from 'react-google-login';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const [white, setWhite] = React.useState(false);
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setToggleDropDown(false));

  React.useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
  }, [isSticky]);

  const { mobile } = useMediaPoints();
  const handleMenuClick = () => {
    setToggleDropDown(!toggleDropDown);
  };
  const { t } = useTranslation();

  const responseGoogle = response => {
    console.log(response);
  };

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
            <div
              className={classNames(styles.headerMainNavigationItem, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
            >
              {t('header.header-main.link-three')}
              <span className={styles.arrow}>&#x25BE;</span>
            </div>
          </div>
          <div className={styles.headerMainNavigationBlock} ref={ref}>
            <div
              className={classNames(styles.headerMainNavigationItem, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
            >
              {t('header.header-main.link-two')}
              <span className={styles.arrow}>&#x25BE;</span>
            </div>
          </div>
          <GoogleLogin
            clientId='293038701913-22g38t0rpep02thga71qsonelnlinqrf.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

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
            <Icon
              name={
                whiteBackground || isSticky
                  ? 'default-avatar-b'
                  : 'default-avatar'
              }
            />

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

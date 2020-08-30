import * as React from 'react';
import { HeaderMainProps } from './header-main.props';
import * as styles from './header-main.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '@core/components';
import classNames from 'classnames';
import { useHeaderData } from '../hooks/header.hook';
import { useMediaPoints } from '@core/shared';
import { DropDown } from '../drop-down';

/**
 * Renders HeaderMain
 */

const HeaderMain: React.FC<HeaderMainProps> = ({
  whiteBackground,
  isSticky
}) => {
  const [white, setWhite] = React.useState(false);
  React.useEffect(() => {
    isSticky ? setWhite(true) : setWhite(false);
  }, [isSticky]);
  const { navigation } = useHeaderData();
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
          {navigation.map(el => {
            return (
              <div
                key={el.id}
                className={classNames(styles.headerMainNavigationItem, {
                  [styles.invertedHeader]: whiteBackground || isSticky
                })}
              >
                {el.title}{' '}
                <Icon
                  name={
                    whiteBackground || isSticky
                      ? 'triangle-arr-b'
                      : 'triangle-arr'
                  }
                />
                {/* <DropDown /> */}
              </div>
            );
          })}
          <div className={styles.headerMainNavigationProfile}>
            <Icon
              name={
                whiteBackground || isSticky
                  ? 'default-avatar-b'
                  : 'default-avatar'
              }
            />
            <div
              className={classNames(styles.local, {
                [styles.invertedHeader]: whiteBackground || isSticky
              })}
            >
              Eng{' '}
              <Icon
                name={
                  whiteBackground || isSticky
                    ? 'triangle-arr-b'
                    : 'triangle-arr'
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { HeaderMain };

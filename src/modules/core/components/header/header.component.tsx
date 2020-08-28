import * as React from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { HeaderState } from './header.state';
import { ActiveMenuType } from './active-menu.enum';
import { BurgerButton } from './burger-button';
import { BurgerMenu } from './burger-menu';
import { ProgramsButton } from './programs-button';
import { ProgramsMenu } from './programs-menu';
import { useHeaderData } from './header.hook';
import { Icon } from '../icon';
import { useMenuData } from './burger-menu/burger-menu.hooks';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useMediaPoints } from '@core/shared';

/**
 * Renders Header
 */
const Header: React.FC<HeaderProps> = ({ whiteBackground }) => {
  const { navigation } = useHeaderData();
  const { dispatch } = useDispatch();
  const { pagesLinks } = useMenuData();
  const { mobile } = useMediaPoints();

  return (
    <React.Fragment>
      <div className={styles.header}>
        {!mobile && (
          <div className={styles.headerMain}>
            {pagesLinks.map((el, idx) => {
              return (
                <NavLink
                  key={idx}
                  className={classNames(styles.headerMainLink, {
                    [styles.invertedHeader]: whiteBackground
                  })}
                  to={el.path}
                >
                  {el.name}
                </NavLink>
              );
            })}
          </div>
        )}
        <div className={styles.headerSecondary}>
          <NavLink className={styles.logo} to={'/'}>
            <Icon name={whiteBackground ? 'logo-b' : 'logo'} />
          </NavLink>
          {mobile ? (
            <div className={styles.mobileMenu}>
              <Icon name='burger' />
            </div>
          ) : (
            <div className={styles.headerSecondaryNavigation}>
              {navigation.map(el => {
                return (
                  <div
                    key={el.id}
                    className={classNames(
                      styles.headerSecondaryNavigationItem,
                      {
                        [styles.invertedHeader]: whiteBackground
                      }
                    )}
                  >
                    {el.title}{' '}
                    <Icon
                      name={whiteBackground ? 'triangle-arr-b' : 'triangle-arr'}
                    />
                  </div>
                );
              })}
              <div className={styles.headerSecondaryNavigationProfile}>
                <Icon
                  name={whiteBackground ? 'default-avatar-b' : 'default-avatar'}
                />
                <div
                  className={classNames(styles.local, {
                    [styles.invertedHeader]: whiteBackground
                  })}
                >
                  Eng{' '}
                  <Icon
                    name={whiteBackground ? 'triangle-arr-b' : 'triangle-arr'}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <BurgerMenu
          isOpened={this.state.activeMenuType === ActiveMenuType.menu}
          closeMenu={() => this.closeMenu()}
          onClick={() => this.toggleOpenMenu(ActiveMenuType.programs)}
        />
        <ProgramsMenu
          isOpened={this.state.activeMenuType === ActiveMenuType.programs}
          closeMenu={() => this.closeMenu()}
        />
        <header
          className={classNames(styles.header, {
            [styles.inverted]: this.isInvertHeader
          })}
        >
          <NavLink to={'/'}>
            {!this.isInvertHeader ? (
              <Icon name='logo' className={styles.logo} />
            ) : (
              <Icon name='logo-b' className={styles.logo} />
            )}
          </NavLink>
          <BurgerButton
            isOpened={this.state.activeMenuType === ActiveMenuType.menu}
            isInverted={this.isInvertHeader}
            openBurger={() => this.toggleOpenMenu(ActiveMenuType.menu)}
          />
          <ProgramsButton
            isOpened={this.state.activeMenuType === ActiveMenuType.programs}
            isInverted={this.isInvertHeader}
            openMenu={() => this.toggleOpenMenu(ActiveMenuType.programs)}
          />
          <div
            className={classNames(styles.navigationLinks, {
              [styles.inverted]: this.isInvertHeader
            })}
          >
            {navigation.map(item => {
              const { id, title, to } = item;
              return (
                <NavLink key={id} to={to}>
                  {title}
                </NavLink>
              );
            })}
          </div>
        </header> */}
    </React.Fragment>
  );
};

export { Header };

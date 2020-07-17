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

/**
 * Renders Header
 */
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderInvert: false,
      activeMenuType: ActiveMenuType.none
    };
  }

  public toggleBgColor = () => {
    const isChangeBg = window.pageYOffset >= 100;
    !this.props.whiteBackground &&
      this.state.activeMenuType === ActiveMenuType.none &&
      isChangeBg !== this.state.isHeaderInvert &&
      this.setState({ isHeaderInvert: isChangeBg });
  };

  public componentDidMount() {
    window.addEventListener('scroll', this.toggleBgColor);
    window.addEventListener('resize', this.resize);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleBgColor);
    window.removeEventListener('resize', this.resize);
  }

  public resize = () => {
    if (
      window.innerWidth < 768 &&
      this.state.activeMenuType === ActiveMenuType.programs
    ) {
      this.closeMenu();
    }
  };

  public get isInvertHeader(): boolean {
    return (
      this.props.whiteBackground ||
      this.state.activeMenuType !== ActiveMenuType.none ||
      window.pageYOffset >= 100
    );
  }

  public toggleOpenMenu(type: ActiveMenuType) {
    this.setState({
      activeMenuType:
        type === this.state.activeMenuType ? ActiveMenuType.none : type
    });
  }

  public closeMenu() {
    this.setState({
      activeMenuType: ActiveMenuType.none
    });
  }

  render() {
    const { navigation } = useHeaderData();

    return (
      <>
        <BurgerMenu
          isOpened={this.state.activeMenuType === ActiveMenuType.menu}
          closeMenu={() => this.closeMenu()}
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
        </header>
      </>
    );
  }
}

export { Header };

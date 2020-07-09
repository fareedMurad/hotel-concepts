import * as React from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '../icon';
import classNames from 'classnames';
import { useHomeData } from '@pages/learning-approach/learning-approach.hook';
import { HeaderState } from './header.state';
import { ActiveMenuType } from './active-menu.enum';
import { BurgerButton } from './burger-button';
import { BurgerMenu } from './burger-menu';
import { ProgramsButton } from './programs-button';
import { ProgramsMenu } from './programs-menu';

/**
 * Renders Header
 */
class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      isHeaderInvert: false,
      activeMenuType: ActiveMenuType.none
    }
  }

  public toggleBgColor = () => {
    const isChangeBg = (window.pageYOffset >= 100);
    !this.props.whiteBackground &&
    this.state.activeMenuType === ActiveMenuType.none &&
    isChangeBg !== this.state.isHeaderInvert &&
    this.setState({ isHeaderInvert: isChangeBg });
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.toggleBgColor);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleBgColor);
  }

  public get isInvertHeader(): boolean {
    return this.props.whiteBackground ||
           this.state.activeMenuType !== ActiveMenuType.none ||
           window.pageYOffset >= 100;
  }

  public toggleOpenMenu(type: ActiveMenuType) {
    this.setState({
      activeMenuType: (type === this.state.activeMenuType) ? ActiveMenuType.none : type
    });
  }

  public closeMenu() {
    this.setState({
      activeMenuType: ActiveMenuType.none
    });
  }

  render () {
    const { navigation } = useHomeData();

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
        <header className={classNames(styles.header, {
            [styles.inverted]: this.isInvertHeader
          })}>
          <NavLink to={'/'}>
            <img
              className={styles.logo}
              src={require(!this.isInvertHeader ?
                    'img/header-logo.png' :
                    'img/header-logo-dark.png')}
              alt="Kordie"
            />
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
    )
  }
};

export { Header };

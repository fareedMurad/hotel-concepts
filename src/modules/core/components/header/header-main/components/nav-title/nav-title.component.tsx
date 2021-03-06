import * as React from 'react';
import { NavTitleProps } from './nav-title.props';
import * as styles from './nav-title.scss';
import classNames from 'classnames';
import { Icon } from '@core/components';
import { useHeaderMainData } from '../../hooks';
import { useDispatch } from 'react-redux';
import { handleNotifierCart } from '@app/redux/cart';

/**
 * Renders NavTitle
 */
const NavTitle: React.FC<NavTitleProps> = ({
  className,
  title,
  showMenu,
  hideDropdown
}) => {
  const { whiteHeader, stickyHeader, showDropdown } = useHeaderMainData();
  const blackTheme = whiteHeader || stickyHeader;
  const dispatch = useDispatch();
  const hideCartOnHover = () => {
    showDropdown && dispatch(handleNotifierCart.hideModal());
  };
  return (
    <div
      className={classNames(className, styles.navTitle, {
        [styles.active]: showMenu
      })}
      onMouseOver={() => hideCartOnHover()}
    >
      {title}{' '}
      {!hideDropdown && (
        <Icon
          className={classNames(styles.shape, {
            [styles.activeTriangel]: showMenu
          })}
          name={'triangle-arr-b'}
        />
      )}
    </div>
  );
};

export { NavTitle };

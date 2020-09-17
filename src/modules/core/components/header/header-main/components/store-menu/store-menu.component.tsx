import * as React from 'react';
import { StoreMenuProps } from './store-menu.props';
import * as styles from './store-menu.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useAnimation } from '../../animation';
import { animated } from 'react-spring';
import { useStoreMenuData } from './store-menu.hook';
import { NavLink } from 'react-router-dom';
import { useClickOutside } from '@core/shared';
import { DropDown } from '../drop-down';

/**
 * Renders StoreMenu
 */
const StoreMenu: React.FC<StoreMenuProps> = ({ className }) => {
  const { t } = useTranslation();
  const [toggleDropDown, setToggleDropdown] = React.useState(false);
  const { storeMenuLinks } = useStoreMenuData();
  const ref = React.useRef(null);
  useClickOutside(ref, () => {
    setToggleDropdown(false);
  });
  return (
    <React.Fragment>
      <div
        ref={ref}
        onClick={() => setToggleDropdown(true)}
        className={classNames(className, styles.storeMenu)}
      >
        {t('header.header-main.link-two')}
        <span>&#x25BE;</span>
      </div>
      <DropDown links={storeMenuLinks} show={toggleDropDown} />
    </React.Fragment>
  );
};

export { StoreMenu };

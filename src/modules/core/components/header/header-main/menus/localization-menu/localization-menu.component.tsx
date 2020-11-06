import { handleNotifierCart } from '@app/redux/cart';
import { Icon } from '@core/components';
import { changeLanguage } from '@localization/store';
import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocalizationData } from './localization-menu.hook';
import { LocalizationMenuProps } from './localization-menu.props';
import * as styles from './localization-menu.scss';

/**
 * Renders LocalizationMenu
 */
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({ theme }) => {
  const { languages, selectedLanguage, showDropdown } = useLocalizationData();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const hideCartOnHover = () => {
    showDropdown && dispatch(handleNotifierCart.hideModal());
    setShowMenu(true);
  };

  return (
    <div
      className={classNames(styles.localMenu, {
        [styles.localMenuOpen]: showMenu,
        [styles.black]: theme === 'black',
        [styles.secondary]: theme === 'secondary'
      })}
      onMouseEnter={() => hideCartOnHover()}
      onMouseLeave={() => setShowMenu(false)}
    >
      {selectedLanguage.name}{' '}
      <Icon
        className={showMenu && styles.arrowRotate}
        name={theme != 'primary' ? 'triangle-arr-b' : 'triangle-arr'}
      />
      {showMenu && (
        <div
          className={classNames(styles.dropDown, {
            [styles.blackDropdown]: theme === 'black',
            [styles.secondaryDropdown]: theme === 'secondary'
          })}
        >
          {languages.map(({ id, name }) => (
            <div
              key={id}
              className={styles.link}
              onClick={() => dispatch(changeLanguage(id))}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Default props
 */
LocalizationMenu.defaultProps = {
  theme: 'primary'
};

export { LocalizationMenu };

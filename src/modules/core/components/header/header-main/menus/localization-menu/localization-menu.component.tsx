import * as React from 'react';
import * as styles from './localization-menu.scss';
import { Icon } from '@core/components';
import { LocalizationMenuProps } from './localization-menu.props';
import { changeLanguage } from '@localization/store';
import classNames from 'classnames';
import { handleNotifierCart } from '@app/redux/cart';
import { useDispatch } from 'react-redux';
import { useLocalizationData } from './localization-menu.hook';
import { useState } from 'react';
import { useClickOutside } from '@core/shared';

/**
 * Renders LocalizationMenu
 */
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({ theme }) => {
  const { languages, selectedLanguage, showDropdown } = useLocalizationData();
  const ref = React.useRef();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const hideCartOnHover = () => {
    showDropdown && dispatch(handleNotifierCart.hideModal());
    setShowMenu(true);
  };

  useClickOutside(ref, () => {
    setShowMenu(false);
  });

  return (
    <div
      ref={ref}
      className={classNames(styles.localMenu, {
        [styles.localMenuOpen]: showMenu,
        [styles.black]: theme === 'black',
        [styles.secondary]: theme === 'secondary'
      })}
      onMouseEnter={() => hideCartOnHover()}
      onMouseLeave={() => setShowMenu(false)}
      onClick={() => hideCartOnHover()}
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
              onClick={() => {
                // #non-clickable
                if (name === 'ES') {
                  return;
                }
                dispatch(changeLanguage(id));
              }}
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

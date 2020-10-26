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
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({
  className,
  blackTheme
}) => {
  const { languages, selectedLanguage } = useLocalizationData();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={classNames(styles.localizationMenu, {
        [styles.localizationMenuOpen]: showMenu,
        [styles.localizationMenuBlack]: blackTheme
      })}
      onClick={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {selectedLanguage.name}{' '}
      <Icon
        className={showMenu && styles.arrowRotate}
        name={blackTheme ? 'triangle-arr-b' : 'triangle-arr'}
      />
      {showMenu && (
        <div
          className={classNames(styles.dropdown, {
            [styles.dropdownBlack]: blackTheme
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

export { LocalizationMenu };

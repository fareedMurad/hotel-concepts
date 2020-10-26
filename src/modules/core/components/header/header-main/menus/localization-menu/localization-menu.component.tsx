import * as React from 'react';
import { LocalizationMenuProps } from './localization-menu.props';
import * as styles from './localization-menu.scss';
import { Icon } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '@localization/store';
import { State } from '@app/redux/state';
import { useLocalizationData } from './localization-menu.hook';
import { useState } from 'react';
import classNames from 'classnames';

/**
 * Renders LocalizationMenu
 */
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({ theme }) => {
  const { languages, selectedLanguage } = useLocalizationData();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  console.log(theme);

  return (
    <div
      className={classNames(styles.localMenu, {
        [styles.open]: showMenu,
        [styles.black]: theme === 'black',
        [styles.secondary]: theme === 'secondary'
      })}
      onClick={() => setShowMenu(true)}
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
          {languages.map(el => (
            <div
              key={el.id}
              className={styles.link}
              onClick={() => dispatch(changeLanguage(el.id))}
            >
              {el.name}
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

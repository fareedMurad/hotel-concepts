import * as React from 'react';
import { LocalizationMenuProps } from './localization-menu.props';
import * as styles from './localization-menu.scss';
import { Icon } from '@core/components';
import { useClickOutside } from '@core/shared';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '@localization/store';

/**
 * Localization Dropdown
 */
const LocalizationDropDown: React.FC<any> = ({
  langueges,
  setCurrentLanguage
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.dropDown}>
      {langueges.map(el => (
        <div
          key={el.id}
          onClick={() => {
            setCurrentLanguage(el.name);
          }}
        >
          <div onClick={() => dispatch(changeLanguage(el.id))}>{el.name}</div>
        </div>
      ))}
    </div>
  );
};
/**
 * Renders LocalizationMenu
 */
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({
  className,
  iconName
}) => {
  const languages = [
    {
      id: 'en-us',
      name: 'eng'
    },
    {
      id: 'es',
      name: 'esp'
    }
  ];
  const [currentLanguage, setCurrentLanguage] = React.useState(
    languages[0].name
  );
  const [showLanguges, setShowLangueges] = React.useState(false);
  return (
    <div className={className} onClick={() => setShowLangueges(!showLanguges)}>
      {currentLanguage} <Icon name={iconName} />
      {showLanguges && (
        <LocalizationDropDown
          setCurrentLanguage={setCurrentLanguage}
          langueges={languages}
        />
      )}
    </div>
  );
};

export { LocalizationMenu };

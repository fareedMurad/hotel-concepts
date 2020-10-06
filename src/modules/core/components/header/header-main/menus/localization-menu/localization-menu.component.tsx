import * as React from 'react';
import { LocalizationMenuProps } from './localization-menu.props';
import * as styles from './localization-menu.scss';
import { Icon } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '@localization/store';
import { State } from '@app/redux/state';
import { useLocalizationData } from './localization-menu.hook';
import { useState } from 'react';

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
  iconName,
  selectedMenu,
  setSelectedMenu
}) => {
  const { languages, selectedLanguage } = useLocalizationData();

  return (
    <div
      className={className}
      onMouseEnter={() => setSelectedMenu('Languages')}
      onMouseLeave={() => setSelectedMenu('')}
    >
      {selectedLanguage.name} <Icon name={iconName} />
      {selectedMenu === 'Languages' && (
        <LocalizationDropDown
          setSelectedMenu={setSelectedMenu}
          langueges={languages}
        />
      )}
    </div>
  );
};

export { LocalizationMenu };

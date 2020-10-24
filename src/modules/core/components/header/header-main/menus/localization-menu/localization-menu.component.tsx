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
const LocalizationMenu: React.FC<LocalizationMenuProps> = ({
  className,
  iconName,
  selectedMenu,
  setSelectedMenu
}) => {
  const { languages, selectedLanguage } = useLocalizationData();
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(className, styles.localMenu, {
        [styles.open]: selectedMenu === 'Languages'
      })}
      onMouseEnter={() => setSelectedMenu('Languages')}
      onMouseLeave={() => setSelectedMenu('')}
    >
      {selectedLanguage.name} <Icon name={iconName} />
      {selectedMenu === 'Languages' && (
        <div className={styles.dropDown}>
          {languages.map(el => (
            <div
              className={styles.link}
              key={el.id}
              onClick={() => {
                setSelectedMenu(el.name);
              }}
            >
              <div onClick={() => dispatch(changeLanguage(el.id))}>
                {el.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { LocalizationMenu };

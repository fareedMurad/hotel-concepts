import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs.hook';
import { DropDown } from '../../../drop-down';
import { Icon } from '@core/components';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<any> = ({
  className,
  toggleDropDown,
  onClick
}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { programsData, programsLoading } = useProgramsMenuData(language);
  const { t } = useTranslation();
  if (programsLoading) return <div></div>;

  return (
    <React.Fragment>
      <div onClick={onClick} className={className}>
        {t('header.header-main.link-one')}
        <span className={styles.arrow}>&#x25BE;</span>
      </div>

      <DropDown show={toggleDropDown} subLinks={programsData} />
    </React.Fragment>
  );
};

export { ProgramsMenu };

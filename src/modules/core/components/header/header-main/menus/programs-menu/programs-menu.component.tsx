import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs.hook';
import { DropDownPrograms } from './drop-down-programs';
import { Icon } from '@core/components';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { useClickOutside } from '@core/shared';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<any> = ({ className }) => {
  const ref = React.useRef();
  const [toggleDropDown, setToggleDropDown] = React.useState(false);
  useClickOutside(ref, () => {
    setToggleDropDown(false);
  });
  const { language } = useSelector((state: State) => state.localization);
  const { programsData, programsLoading } = useProgramsMenuData(language);
  const { t } = useTranslation();
  if (programsLoading) return <div />;

  return (
    <div className={styles.programsMenu} ref={ref}>
      <div onClick={() => setToggleDropDown(true)} className={className}>
        {t('header.header-main.link-one')}
        <span className={styles.arrow}>&#x25BE;</span>
      </div>
      {toggleDropDown && (
        <DropDownPrograms
          setToggleDropdown={setToggleDropDown}
          subLinks={programsData}
          show={toggleDropDown}
        />
      )}
    </div>
  );
};

export { ProgramsMenu };

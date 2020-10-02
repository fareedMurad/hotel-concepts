import * as React from 'react';
import { AboutMenuProps } from './about-menu.props';
import * as styles from './about-menu.scss';
import { useAboutMenuData } from './about-menu.hook';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useClickOutside } from '@core/shared';
import { DropDown } from './drop-down';

/**
 * Renders AboutMenu
 */
const AboutMenu: React.FC<AboutMenuProps> = ({ onClick, className }) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const { aboutMenuLinks } = useAboutMenuData();
  const [toggleDropDown, setToggleDropdown] = React.useState(false);
  useClickOutside(ref, () => {
    setToggleDropdown(false);
  });
  React.useEffect(() => {
    return () => setToggleDropdown(false);
  }, [location.pathname]);
  return (
    <React.Fragment>
      <div
        className={classNames(className, styles.aboutMenu)}
        onMouseOver={() => setToggleDropdown(true)}
        ref={ref}
      >
        {t('header.header-main.link-three')}
        <span className={styles.arrow}>&#x25BE;</span>
        {toggleDropDown && (
          <DropDown
            links={aboutMenuLinks}
            setToggleDropdown={setToggleDropdown}
          />
        )}
      </div>
    </React.Fragment>
  );
};
export { AboutMenu };

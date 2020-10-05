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
const AboutMenu: React.FC<AboutMenuProps> = ({
  onClick,
  className,
  setSelectedMenu,
  selectedMenu
}) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const { aboutMenuLinks } = useAboutMenuData();
  useClickOutside(ref, () => {
    setSelectedMenu('');
  });
  React.useEffect(() => {
    return () => setSelectedMenu('');
  }, [location.pathname]);
  return (
    <React.Fragment>
      <div
        className={classNames(className, styles.aboutMenu)}
        onMouseOver={() => {
          setSelectedMenu('About');
        }}
        ref={ref}
      >
        {t('header.header-main.link-three')}
        <span className={styles.arrow}>&#x25BE;</span>
        {selectedMenu === 'About' && (
          <DropDown links={aboutMenuLinks} setSelectedMenu={setSelectedMenu} />
        )}
      </div>
    </React.Fragment>
  );
};
export { AboutMenu };

import * as React from 'react';
import { AboutMenuProps } from './about-menu.props';
import * as styles from './about-menu.scss';

import { useAboutMenuData } from './about-menu.hook';
import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useClickOutside } from '@core/shared';
import { useAnimation } from '../../animation';

/**
 * Renders AboutMenu
 */
const AboutMenu: React.FC<AboutMenuProps> = ({ onClick, className }) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const aboutMenuData = useAboutMenuData();
  const [toggleDropDown, setToggleDropdown] = React.useState(false);
  useClickOutside(ref, () => {
    setToggleDropdown(false);
  });

  const { transitions } = useAnimation(toggleDropDown);

  return (
    <React.Fragment>
      <div
        className={classNames(className, styles.aboutMenu)}
        onClick={() => setToggleDropdown(true)}
      >
        {t('header.header-main.link-three')}
        <span className={styles.arrow}>&#x25BE;</span>
      </div>
      {transitions.map(({ props, key, item }) => {
        return (
          item && (
            <animated.div style={props} className={styles.dropDown} ref={ref}>
              {aboutMenuData.map(el => {
                return (
                  <div className={styles.dropDownItem} key={el.to + el.name}>
                    {' '}
                    <NavLink
                      onClick={() => setToggleDropdown(false)}
                      to={el.to}
                    >
                      {el.name}
                    </NavLink>
                  </div>
                );
              })}
            </animated.div>
          )
        );
      })}
    </React.Fragment>
  );
};
export { AboutMenu };

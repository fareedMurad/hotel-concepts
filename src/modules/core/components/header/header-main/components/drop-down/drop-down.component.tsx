import * as React from 'react';
import { DropDownProps } from './drop-down.props';
import * as styles from './drop-down.scss';
import { useAnimation } from '../../animation';
import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

/**
 * Renders DropDown
 */
const DropDown: React.FC<DropDownProps> = ({ show, links }) => {
  console.log(links);
  const { transitions } = useAnimation(show);

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => {
        return (
          item && (
            <animated.div style={props} className={styles.dropDown}>
              {links.map((link, idx) => {
                return (
                  <div key={link.name + idx} className={styles.dropDownItem}>
                    <NavLink to={link.to}>{link.name}</NavLink>
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

export { DropDown };

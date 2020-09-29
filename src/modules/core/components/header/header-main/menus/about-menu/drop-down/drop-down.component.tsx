import * as React from 'react';
import { DropDownProps } from './drop-down.props';
import * as styles from './drop-down.scss';
import { NavLink } from 'react-router-dom';

/**
 * Renders DropDown
 */
const DropDown: React.FC<DropDownProps> = ({ show, links }) => {
  return (
    <React.Fragment>
      {show && (
        <div className={styles.dropDown}>
          {links.map((link, idx) => {
            return (
              <div key={link.name + idx} className={styles.dropDownItem}>
                <NavLink to={link.to}>{link.name}</NavLink>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export { DropDown };
import * as React from 'react';
import { CardDropdown } from '../../components/card-dropdown';
import { LinkDropdown } from '../../components/link-dropdown';
import { NavTitle } from '../../components/nav-title';
import { CorporateMenuProps } from './corporate-menu.props';
import * as styles from './corporate-menu.scss';
import { useState } from 'react';

/**
 * Renders CorporateMenu
 */
const CorporateMenu: React.FC<CorporateMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={styles.corporateMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='Corporate Solutions' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => {
            setShowMenu(false);
          }}
        >
          <LinkDropdown
            className={styles.link}
            onClick={() => setShowMenu(false)}
            link='Online programs'
            to='/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h'
            image=''
          />
          <LinkDropdown
            className={styles.link}
            onClick={() => setShowMenu(false)}
            link='E-library Access'
            to='/marketplace'
            image=''
          />
        </CardDropdown>
      )}
    </div>
  );
};

export { CorporateMenu };

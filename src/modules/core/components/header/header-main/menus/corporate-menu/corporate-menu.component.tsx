import * as React from 'react';
import * as styles from './corporate-menu.scss';
import { CardDropdown, LinkDropdown, NavTitle } from '../../components';
import { CorporateMenuProps } from './corporate-menu.props';
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
            // #non-clickable
            // onClick={() => setShowMenu(false)}
            link='Online programs'
            // to='/for-companies'
            to=''
            image=''
          />
          <LinkDropdown
            className={styles.link}
            // onClick={() => setShowMenu(false)}
            link='E-library Access'
            // to='/marketplace'
            to=''
            image=''
          />
        </CardDropdown>
      )}
    </div>
  );
};

export { CorporateMenu };

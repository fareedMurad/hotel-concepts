import * as React from 'react';
import * as styles from './corporate-menu.scss';
import { CardDropdown, LinkDropdown, NavTitle } from '../../components';
import { CorporateMenuProps } from './corporate-menu.props';
import { useCorporateImage } from '../library-menu/library-menu.hook';
import { useIntroData } from '@pages/for-companies/sections/intro/intro.hook';
import { useState } from 'react';

/**
 * Renders CorporateMenu
 */
const CorporateMenu: React.FC<CorporateMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { introData } = useIntroData();
  const { corporateImage } = useCorporateImage();
  return (
    <div
      className={styles.corporateMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle
        showMenu={showMenu}
        className={className}
        title='Corporate Solutions'
      />
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
            onClick={() => setShowMenu(false)}
            link='Online programs'
            to='/for-companies'
            image={introData}
          />
          <LinkDropdown
            className={styles.link}
            onClick={() => setShowMenu(false)}
            link='Digital Library Access'
            to='/marketplace'
            image={corporateImage}
          />
        </CardDropdown>
      )}
    </div>
  );
};

export { CorporateMenu };

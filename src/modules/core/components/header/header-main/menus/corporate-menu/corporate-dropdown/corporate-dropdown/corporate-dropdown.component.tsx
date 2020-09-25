import * as React from 'react';
import { CorporateDropdownProps } from './corporate-dropdown.props';
import * as styles from './corporate-dropdown.scss';

/**
 * Renders CorporateDropdown
 */
const CorporateDropdown: React.FC<CorporateDropdownProps> = ({
  setToggleDropdown
}) => {
  return (
    <div className={styles.corporateDropdown}>
      <div className={styles.corporateDropdownLinks}>
        <div className={styles.corporateDropdownLinksLink}>
          <div>
            Online programs <span>&#8594;</span>
          </div>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${require('img/header-image.png')})`
            }}
          />
        </div>

        <div className={styles.corporateDropdownLinksLink}>
          <div>
            E-library Access <span>&#8594;</span>
          </div>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${require('img/header-image.png')})`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { CorporateDropdown };

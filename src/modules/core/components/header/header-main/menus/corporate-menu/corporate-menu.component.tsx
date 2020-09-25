import * as React from 'react';
import { CorporateMenuProps } from './corporate-menu.props';
import * as styles from './corporate-menu.scss';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '@core/shared';
import classNames from 'classnames';
import { CorporateDropdown } from './corporate-dropdown/corporate-dropdown';

/**
 * Renders CorporateMenu
 */
const CorporateMenu: React.FC<CorporateMenuProps> = ({ className }) => {
  const { t } = useTranslation();
  const [toggleDropDown, setToggleDropdown] = React.useState(false);
  const ref = React.useRef(null);
  useClickOutside(ref, () => {
    setToggleDropdown(false);
  });
  return (
    <div className={styles.corporateMenu} ref={ref}>
      <div
        onClick={() => setToggleDropdown(true)}
        className={classNames(className, styles.corporateMenuCaption)}
      >
        Corporate solutions
        <span>&#x25BE;</span>
        {toggleDropDown && (
          <CorporateDropdown setToggleDropdown={setToggleDropdown} />
        )}
      </div>
    </div>
  );
};

export { CorporateMenu };

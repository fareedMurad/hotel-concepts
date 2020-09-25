import * as React from 'react';
import { StoreMenuProps } from './library-menu.props';
import * as styles from './library-menu.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useClickOutside } from '@core/shared';
import { LibraryDropdown } from './library-dropdown';

/**
 * Renders StoreMenu
 */
const LibraryMenu: React.FC<StoreMenuProps> = ({ className }) => {
  const { t } = useTranslation();
  const [toggleDropDown, setToggleDropdown] = React.useState(false);
  const ref = React.useRef(null);
  useClickOutside(ref, () => {
    setToggleDropdown(false);
  });
  return (
    <React.Fragment>
      <div
        ref={ref}
        onClick={() => setToggleDropdown(true)}
        className={classNames(className, styles.libraryMenu)}
      >
        E-library
        <span>&#x25BE;</span>
        {toggleDropDown && (
          <LibraryDropdown setToggleDropdown={setToggleDropdown} />
        )}
      </div>
    </React.Fragment>
  );
};

export { LibraryMenu };

import * as React from 'react';
import { LibraryDropdownProps } from './library-dropdown.props';
import * as styles from './library-dropdown.scss';

/**
 * Renders StoreDropdown
 */
const LibraryDropdown: React.FC<LibraryDropdownProps> = ({}) => {
  return (
    <div className={styles.libraryDropdown}>
      <div className={styles.libraryDropdownTitle}>
        Explore <span>&#8594; </span>
      </div>
      <div className={styles.libraryDropdownLinks}>
        <div className={styles.libraryDropdownLinksLink}>
          <div>Indicidual Subscription</div>
          <div
            className={styles.image}
            style={{
              backgroundImage: `src(${require('img/header-image.png')})`
            }}
          />
        </div>
        <div className={styles.libraryDropdownLinksLink}>
          Corporated Subscription
        </div>
        <div className={styles.image} style={{ backgroundImage: '' }} />
      </div>
    </div>
  );
};

export { LibraryDropdown };

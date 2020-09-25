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
          <div>
            Individual Subscription <span>&#8594;</span>
          </div>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${require('img/header-image.png')})`,
              marginRight: 28
            }}
          />
        </div>
        <div className={styles.libraryDropdownLinksLink}>
          Corporated Subscription <span>&#8594;</span>
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

export { LibraryDropdown };

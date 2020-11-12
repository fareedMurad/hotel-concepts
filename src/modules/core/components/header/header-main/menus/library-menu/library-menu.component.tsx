import * as React from 'react';
import * as styles from './library-menu.scss';
import { CardDropdown, LinkDropdown, NavTitle } from '../../components';
import { useCorporateImage, useIndividualImage } from './library-menu.hook';
import { Icon } from '@core/components';
import { LibraryMenuProps } from './library-menu.props';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

/**
 * Renders LibraryMenu
 */
const LibraryMenu: React.FC<LibraryMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const { corporateImage } = useCorporateImage();
  const { individualImage } = useIndividualImage();

  return (
    <div
      className={styles.libraryMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='Digital Library' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          <div
            className={styles.dropdownTitle}
            onClick={() => {
              // #non-clickable
              // setShowMenu(false);
              // dispatch(navigate('/marketplace'));
            }}
          >
            <div>Explore digital collections</div>
            <Icon name='arrows/arrow-right-primary' className={styles.arrow} />
          </div>
          <div className={styles.links}>
            <LinkDropdown
              className={styles.linksLink}
              // onClick={() => setShowMenu(false)}
              link='Individual Subscription'
              to=''
              image={individualImage}
            />
            <LinkDropdown
              // onClick={() => setShowMenu(false)}
              className={styles.linksLink}
              link='Corporate Subscription'
              to=''
              image={corporateImage}
            />
          </div>
        </CardDropdown>
      )}
    </div>
  );
};

export { LibraryMenu };

import * as React from 'react';
import { LibraryMenuProps } from './library-menu.props';
import * as styles from './library-menu.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { CardDropdown, LinkDropdown, NavTitle } from '../../components';
import { Icon } from '@core/components';

/**
 * Renders LibraryMenu
 */
const LibraryMenu: React.FC<LibraryMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.libraryMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='E-library' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          <div
            className={styles.dropdownTitle}
            onClick={() => {
              setShowMenu(false);
              dispatch(navigate('/marketplace'));
            }}
          >
            <div>Explore</div>
            <Icon name='arrows/arrow-right-primary' className={styles.arrow}/>
          </div>
          <div className={styles.links}>
            <LinkDropdown
              className={styles.linksLink}
              onClick={() => setShowMenu(false)}
              link='Individual Subscription'
              to=''
              image=''
            />
            <LinkDropdown
              onClick={() => setShowMenu(false)}
              className={styles.linksLink}
              link='Corporate Subscription'
              to=''
              image=''
            />
          </div>
        </CardDropdown>
      )}
    </div>
  );
};

export { LibraryMenu };

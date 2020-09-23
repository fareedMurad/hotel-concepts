import * as React from 'react';
import { LibraryProps } from './library.props';
import * as styles from './library.scss';
import { H2, Icon } from '@core/components';
import { useLibraryData } from './library.hook';
import { useClickOutside } from '@core/shared';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, toggleBookPreviewModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { BookPreviewModal } from '@pages/components/book-preview-modal';
import { State } from '@app/redux/state';
import { Hero } from '@account/components/hero';
import { Navigation } from '@account/components/navigation';
import { NavLink } from 'react-router-dom';
import { BookCard } from './components/book-card';

/**
 * Renders Library
 */
const Library: React.FC<LibraryProps> = ({}) => {
  const [showMenu, setShowMenu] = React.useState(0);
  const books = useLibraryData();
  const ref = React.useRef();
  useClickOutside(ref, () => setShowMenu(0));
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Hero title='My library' />
      <Navigation />
      <div className={styles.library}>
        <div className={styles.libraryTitle}>My bookshelf</div>
        <div className={styles.libraryLinks}>
          <div>Purchased Books</div>
          <div className={styles.libraryLinksWish}>
            Wish list{' '}
            <Icon name='like' className={styles.libraryLinksWishIcon} />
          </div>
        </div>
        <div className={styles.libraryBooks}>
          {books.map(book => {
            return <BookCard book={book} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export { Library };

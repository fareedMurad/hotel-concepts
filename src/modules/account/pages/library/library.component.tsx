import * as React from 'react';
import { LibraryProps } from './library.props';
import * as styles from './library.scss';
import { H2 } from '@core/components';
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
  const { bookPreviewModal } = useSelector((state: State) => state.ui.modal);

  return (
    <React.Fragment>
      <Hero title='My library' />
      <Navigation />
      <div className={styles.library}>
        <div className={styles.libraryTitle}>My bookshelf</div>
        <div className={styles.libraryLinks}>
          <div>Purchased Books</div>
          <div>Wish list</div>
        </div>
        <div className={styles.libraryBooks}>
          {books.map(book => {
            return (
              <BookCard book={book} />
              // <div className={styles.libraryBook} key={book.id}>
              //   <img src={book.picture} alt={book.name} />
              //   <div className={styles.libraryBookName}>{book.name}</div>
              //   <div className={styles.libraryBookButtons}>
              //     <button
              //       onClick={() => {
              //         dispatch(showModal(Modals.bookPreview));
              //         dispatch(toggleBookPreviewModal(true));
              //       }}
              //     >
              //       Read
              //     </button>
              //     <button onClick={() => setShowMenu(book.id)}>Download</button>
              //     {showMenu == book.id && (
              //       <div className={styles.menu} ref={ref}>
              //         <div className={styles.download}>
              //           <h5>PDF</h5>
              //           <a href={book.pdf} download>
              //             Download
              //           </a>
              //         </div>
              //         <div className={styles.download}>
              //           <h5>epub</h5>
              //           <a href={book.epub} download>
              //             Download
              //           </a>
              //         </div>
              //         <div className={styles.download}>
              //           <h5>amazon kindle</h5>
              //           <a href={''}>Download</a>
              //         </div>
              //       </div>
              //     )}
              //     {bookPreviewModal && (
              //       <BookPreviewModal
              //         bookPreview={book.pdf}
              //         hideComponent={() =>
              //           dispatch(toggleBookPreviewModal(false))
              //         }
              //       />
              //     )}
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export { Library };

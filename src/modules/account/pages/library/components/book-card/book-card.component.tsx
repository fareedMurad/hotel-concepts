import * as React from 'react';
import { BookCardProps } from './book-card.props';
import * as styles from './book-card.scss';
import { Hr, Button } from '@core/components';
import { AddToWish } from '@core/components/add-to-wish';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '@app/redux/account';
import { State } from '@app/redux/state';
import { BookPreviewModal } from '@pages/components/book-preview-modal';
import { toggleBookPreviewModal, showModal } from '@ui/modal';
import { Modals } from '@ui/models';

/**
 * Renders BookCard
 */
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { bookPreviewModal } = useSelector((state: State) => state.ui.modal);
  const dispatch = useDispatch();
  return (
    <div className={styles.bookCard}>
      <img
        className={styles.cookCardDescription}
        src={book.picture}
        alt={book.name}
        width={133}
      />
      <AddToWish
        selected={book.wishSelected}
        onClick={() => dispatch(addToWishList('id'))}
        className={styles.bookCardHeart}
      />
      <div className={styles.bookCardUnderline} />
      <div className={styles.bookCardName}>{book.name}</div>
      <Button
        width='100%'
        arrow='→'
        onClick={() => {
          dispatch(showModal(Modals.bookPreview));
          dispatch(toggleBookPreviewModal(true));
        }}
      >
        Read
      </Button>
      <Button width='100%' theme='secondary' arrow='→'>
        Download
      </Button>
      {bookPreviewModal && (
        <BookPreviewModal
          bookPreview={book.pdf}
          hideComponent={() => dispatch(toggleBookPreviewModal(false))}
        />
      )}
    </div>
  );
};

export { BookCard };

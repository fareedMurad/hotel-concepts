import * as React from 'react';
import { BookPreviewModalProps } from './book-preview-modal.props';
import * as styles from './book-preview-modal.scss';
import { Modal } from '@core/components';
import { Modals } from '@ui/models';

/**
 * Renders BookPreviewModal
 */
const BookPreviewModal: React.FC<BookPreviewModalProps> = ({
  bookPreview,
  hideComponent
}) => {
  return (
    <Modal id={Modals.bookPreview} className={styles.bookPreviewModal}>
      <div className={styles.close} onClick={hideComponent}>
        X
      </div>
      <iframe
        width='100%'
        height='700px'
        className={bookPreview}
        src={bookPreview}
      />
    </Modal>
  );
};

export { BookPreviewModal };

import { State } from '@app/redux/state';
import { Modal } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './book-preview-modal.scss';

/**
 * Renders BookPreviewModal
 */
const BookPreviewModal: React.FC = () => {
  const dispatch = useDispatch();
  const { readBookUrl } = useSelector((state: State) => state.ui.modal);
  return (
    <Modal className={styles.modal} id={Modals.bookPreview} withOverlay>
      <div className={styles.header}>
        <div className={styles.headerCaption}>Book Preview</div>
        <div
          className={styles.headerClose}
          onClick={() => dispatch(closeModal(Modals.bookPreview))}
        >
          X
        </div>
      </div>
      <iframe
        className={styles.iframe}
        width='100%'
        height='100%'
        src={readBookUrl}
      />
    </Modal>
  );
};

export { BookPreviewModal };

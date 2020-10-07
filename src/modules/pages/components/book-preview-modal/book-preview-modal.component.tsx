import { State } from '@app/redux/state';
import { Modal } from '@core/components';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './book-preview-modal.scss';

/**
 * Renders BookPreviewModal
 */
const BookPreviewModal: React.FC = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state: State) => state.ui.modal);

  return (
    <Modal id={Modals.bookPreview}>
      <div
        className={styles.close}
        // onClick={()=> dispatch()}
      >
        X
      </div>
      <iframe
        width='100%'
        height='100%'
        // className={bookPreview}
        src='//assets.ctfassets.net/qgx3dmmccd7u/6kwuGAUd5o3htEYA0efasv/04df965eeace89c81c2187091259f6d4/Fundamentals_of_Luxury_Marketing.pdf'
      />
    </Modal>
  );
};

export { BookPreviewModal };

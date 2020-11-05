import { State } from '@app/redux/state';
import { Modal } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './explore-page-modal.scss';

/**
 * Renders ExplorePageModal
 */
const ExplorePageModal: React.FC = () => {
  const dispatch = useDispatch();
  const { readBookUrl } = useSelector((state: State) => state.ui.modal);

  return (
    <Modal className={styles.modal} id={Modals.explorePage} withOverlay>
      <div className={styles.header}>
        <div className={styles.headerCaption}>Page</div>
        <div
          className={styles.headerClose}
          onClick={() => dispatch(closeModal(Modals.explorePage))}
        >
          X
        </div>
      </div>
      <div className={styles.preview}>
        <img className={styles.img} src={readBookUrl} />
      </div>
    </Modal>
  );
};

export { ExplorePageModal };

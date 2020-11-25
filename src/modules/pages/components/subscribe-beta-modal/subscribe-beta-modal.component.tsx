import { Icon, Modal } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SubscribeBetaModalProps } from './subscribe-beta-modal.props';
import * as styles from './subscribe-beta-modal.scss';

/**
 * Renders SubscribeBetaModal
 */
const SubscribeBetaSuccessModal: React.FC<SubscribeBetaModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <Modal id={Modals.subscribeSuccess} className={styles.modal}>
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.subscribeSuccess))}
      />
      <div className={styles.success}>
        <div className={styles.successTitle}>Thank you for signing up</div>
        <div className={styles.successHint}>
          We will get in touch with you shortly
        </div>
      </div>
    </Modal>
  );
};

export { SubscribeBetaSuccessModal };

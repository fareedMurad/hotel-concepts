import { Modal } from '@core/components';
import { Modals } from '@ui/models';
import * as React from 'react';
import { ForgotPasswordModalProps } from './forgot-password-modal.props';
import * as styles from './forgot-password-modal.scss';

/**
 * Renders ForgotPasswordModal
 */
const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({}) => {
  return (
    <Modal id={Modals.forgotPassword}>

    <div className={styles.forgotPasswordModal}>
      modal
    </div>
    </Modal>

  );
};

export { ForgotPasswordModal };

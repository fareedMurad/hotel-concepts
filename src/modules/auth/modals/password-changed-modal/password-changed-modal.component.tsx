import { Button, Icon, Modal } from '@core/components';
import { navigate } from '@router/store';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { PasswordChangedModalProps } from './password-changed-modal.props';
import * as styles from './password-changed-modal.scss';

/**
 * Renders PasswordChangedModal
 */
const PasswordChangedModal: React.FC<PasswordChangedModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <Modal className={styles.passwordChangedModal} id={Modals.passwordChanged}>
      <div className={styles.content}>
        <Icon
          className={styles.close}
          name='closeoutline'
          onClick={() => dispatch(closeModal(Modals.passwordChanged))}
        />
        <div className={styles.title}>Your password has been changed</div>
        <Button
          className={styles.button}
          arrow
          onClick={() => dispatch(navigate('/auth/login'))}
        >
          Log in
        </Button>
        <div className={styles.link} onClick={() => dispatch(navigate('/'))}>
          Go to Homepage
        </div>
      </div>
    </Modal>
  );
};

export { PasswordChangedModal };

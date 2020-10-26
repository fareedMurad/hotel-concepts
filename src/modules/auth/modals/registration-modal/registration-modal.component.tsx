import { Icon, Modal, Preloader } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ModalHeader } from './components/modal-header';
import { ModalLogin } from './components/modal-login';
import * as styles from './registration-modal.scss';

/**
 * Renders RegistrationModal
 */
const RegistrationModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Modal id={Modals.registration} className={styles.registrationModal}>
      <Preloader id={Preloaders.login}>
        <Icon
          name='close-modal'
          className={styles.closeModal}
          onClick={() => dispatch(closeModal(Modals.registration))}
        />
        <ModalHeader />
        <ModalLogin />
      </Preloader>
    </Modal>
  );
};

export { RegistrationModal };

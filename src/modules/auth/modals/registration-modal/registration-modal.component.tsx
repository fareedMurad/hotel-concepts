import * as React from 'react';
import * as styles from './registration-modal.scss';
import { Icon, Modal, Preloader } from '@core/components';
import { Modals, Preloaders } from '@ui/models';
import { ModalHeader } from './components/modal-header';
import { ModalLogin } from './components/modal-login';
import { ModalSignup } from './components/modal-signup';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

/**
 * Renders RegistrationModal
 */
const RegistrationModal: React.FC = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState<'login' | 'register'>('login');

  return (
    <Modal id={Modals.registration} className={styles.registrationModal}>
      <Preloader id={Preloaders.login}>
        <Preloader id={Preloaders.register}>
          <Icon
            name='close-modal'
            className={styles.closeModal}
            onClick={() => dispatch(closeModal(Modals.registration))}
          />
          <ModalHeader
            setActiveModal={setActiveModal}
            activeModal={activeModal}
          />
          {activeModal === 'login' ? <ModalLogin /> : <ModalSignup />}
        </Preloader>
      </Preloader>
    </Modal>
  );
};

export { RegistrationModal };

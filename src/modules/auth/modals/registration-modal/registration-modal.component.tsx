import { Icon, Modal, Preloader } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ModalHeader } from './components/modal-header';
import { ModalLogin } from './components/modal-login';
import * as styles from './registration-modal.scss';
import { useState } from 'react';
import { ModalSignup } from './components/modal-signup';

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
            avtiveModal={activeModal}
          />
          {activeModal === 'login' ? <ModalLogin /> : <ModalSignup />}
        </Preloader>
      </Preloader>
    </Modal>
  );
};

export { RegistrationModal };

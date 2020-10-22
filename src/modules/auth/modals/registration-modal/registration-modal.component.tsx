import * as React from 'react';

import { Icon, Modal, Preloader } from '@core/components';
import { Modals, Preloaders } from '@ui/models';
import { ModalHeader } from './components/modal-header';
import { RegistrationModalProps } from './registration-modal.props';
import * as styles from './registration-modal.scss';
import { ModalLogin } from './components/modal-login';
import { useDispatch } from 'react-redux';
import { closeModal } from '@ui/modal';

/**
 * Renders RegistrationModal
 */
const RegistrationModal: React.FC<RegistrationModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export { RegistrationModal };

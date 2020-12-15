import * as React from 'react';
import * as styles from './registration-modal.scss';
import { Icon, Modal, Preloader } from '@core/components';
import { Modals, Preloaders } from '@ui/models';
import { ModalHeader } from './components/modal-header';
import { ModalLogin } from './components/modal-login';
import { ModalSignup } from './components/modal-signup';
import { closeModal } from '@ui/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { State } from '@app/redux/state';

/**
 * Renders RegistrationModal
 */
const RegistrationModal: React.FC = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState<'login' | 'register'>('login');
  const { active } = useSelector((state: State) => state.ui.modal);
  /**
   * SUPER
   */
  const [handleAnim, setHandleAnim] = useState(false);
  React.useEffect(() => {
    if (activeModal === 'register') {
      setHandleAnim(true);
    }
    if (!active.includes('registration')) {
      setHandleAnim(false);
    }
  }, [activeModal, active]);
  const isRegisterModalActive = activeModal === 'register';
  const preventAnimationReset =
    isRegisterModalActive || handleAnim || !active.includes('registration');
  /**
   * COSTILE
   */
  return (
    <Modal
      id={Modals.registration}
      className={styles.registrationModal}
      noReset={preventAnimationReset}
    >
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

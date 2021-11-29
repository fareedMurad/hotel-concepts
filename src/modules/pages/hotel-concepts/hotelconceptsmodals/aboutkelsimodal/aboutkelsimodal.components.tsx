import * as React from 'react';
import * as styles from './aboutkelsimodal.scss';
import { Icon, Modal, Preloader } from '@core/components';
import { Modals, Preloaders } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { State } from '@app/redux/state';
import { KelsiModal } from '../components/kelsimodal';
import { MagdalenaModal } from '../components/magdalenamodal';

/**
 * Renders aboutKelsiModal
 */
const AboutKelsiModal: React.FC = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState<'user1' | 'user2'>('user1');
  const { active } = useSelector((state: State) => state.ui.modal);
  /**
   * SUPER
   */
  const [handleAnim, setHandleAnim] = useState(false);
  React.useEffect(() => {
    if (activeModal === 'user1') {
      setHandleAnim(true);
    }
    if (!active.includes('aboutKelsiModal')) {
      setHandleAnim(false);
    }
  }, [activeModal, active]);
  const isRegisterModalActive = activeModal === 'user1';
  const preventAnimationReset =
    isRegisterModalActive || handleAnim || !active.includes('aboutKelsiModal');
  /**
   * COSTILE
   */
  return (
    <Modal
      id={Modals.aboutKelsiModal}
      className={styles.aboutKelsiModal}
      noReset={preventAnimationReset}
    >
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.aboutKelsiModal))}
      />

      {activeModal === 'user1' ? <KelsiModal /> : <MagdalenaModal />}
    </Modal>
  );
};

export { AboutKelsiModal };

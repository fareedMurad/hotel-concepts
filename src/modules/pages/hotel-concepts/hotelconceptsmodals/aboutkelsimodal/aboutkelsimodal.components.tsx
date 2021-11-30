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

interface Props {
  modalId: string;
}

/**
 * Renders aboutKelsiModal
 */
const AboutKelsiModal: React.FC<Props> = ({ modalId }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state: State) => state.ui.modal);

  return (
    <Modal
      id={Modals.aboutKelsiModal}
      className={styles.aboutKelsiModal}
      // noReset={activeUser ? prev : preventAnimationReset}
    >
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.aboutKelsiModal))}
      />

      {modalId === 'user1' ? <MagdalenaModal /> : <KelsiModal />}
    </Modal>
  );
};

export { AboutKelsiModal };

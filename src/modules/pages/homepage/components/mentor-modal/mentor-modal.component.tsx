import * as React from 'react';
import { MentorModalProps } from './mentor-modal.props';
import * as styles from './mentor-modal.scss';
import { Modal, Icon } from '@core/components';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';

/**
 * Renders MentorModal
 */
const MentorModal: React.FC<MentorModalProps> = ({ photo, name, surname, city, profession, experience }) => {
  const dispatch = useDispatch();
  return (
    <Modal id={Modals.contributor} className={styles.modal}>
    <div className={styles.modalPerson}>
      <img
        src={`${require(`img/${photo}.png`)}`}
        className={styles.modalPersonPhoto}
      />
      <div className={styles.modalPersonWrapper}>
        <div className={styles.contributorInfo}>
          <div className={styles.contributorInfo}>
            {name} {surname}
          </div>
          <div className={styles.contributorDetails}>
            {city}, {profession}
          </div>
          <div className={styles.contributorDetails}>United Kingdom</div>
        </div>
        <Icon name='linkedin' />
      </div>
    </div>

    <div className={styles.modalContent}>
      <div className={styles.modalContentCaption}>Experience</div>
      <div className={styles.modalContentDescription}>{experience}</div>
    </div>
    <Icon
      name='close-modal'
      className={styles.modalIcon}
      onClick={() => dispatch(closeModal(Modals.contributor))}
    />
  </Modal>
  );
};

export { MentorModal };

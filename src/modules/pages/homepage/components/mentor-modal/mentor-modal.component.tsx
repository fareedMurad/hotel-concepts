import * as React from 'react';
import { MentorModalProps } from './mentor-modal.props';
import * as styles from './mentor-modal.scss';
import { Modal, Icon } from '@core/components';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { useMediaPoints } from '@core/shared';

// todo: adapt styles for mobile version
const GET_MENTOR = gql`
  query($id: String!) {
    mentor(id: $id) {
      name
      surname
      position
      mentorPicture {
        url
      }
      city
      experience
    }
  }
`;
/**
 * Renders MentorModal
 */
// todo: add mentor prop redirectBack (its takes string then on Close modal dispatch navigate to {redirectBack} )
const MentorModal: React.FC<MentorModalProps> = ({}) => {
  const { mobile } = useMediaPoints();

  const dispatch = useDispatch();
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const mentorId = searchParams.get('mentorId');

  const { data, loading, error } = useQuery(GET_MENTOR, {
    variables: { id: mentorId }
  });

  if (loading) return <div>{mobile && <div>Spinner</div>}</div>;

  const mentor = data?.mentor;
  console.log(mentor);
  const { name, surname, position, mentorPicture, city, experience } = mentor;
  return (
    <Modal id={Modals.contributor} className={styles.modal}>
      <div className={styles.modalPerson}>
        <img src={mentorPicture?.url} className={styles.modalPersonPhoto} />
        <div className={styles.modalPersonWrapper}>
          <div className={styles.contributorInfo}>
            <div className={styles.contributorInfo}>
              {name} {surname}
            </div>
            <div className={styles.contributorDetails}>
              {city}, {position}
            </div>
            <div className={styles.contributorDetails}>United Kingdom</div>
          </div>
          <Icon name='linkedin' />
        </div>
      </div>

      <div className={styles.modalContent}>
        <div className={styles.modalContentCaption}>Experience</div>
        <div className={styles.modalContentDescription}>{experience.text}</div>
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

import * as React from 'react';
import { MentorModalProps } from './mentor-modal.props';
import * as styles from './mentor-modal.scss';
import { Modal, Icon, Footer } from '@core/components';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { useMediaPoints } from '@core/shared';
import { Spinner } from '@core/components/spinner';
import { ScrollToTop } from '@app';

const GET_MENTOR = gql`
  query($id: String!) {
    mentor(id: $id) {
      name
      surname
      position
      linkedIn
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
const MentorModal: React.FC<MentorModalProps> = ({ hideComponent }) => {
  const { mobile } = useMediaPoints();

  const dispatch = useDispatch();
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const mentorId = searchParams.get('mentorId');
  const { data, loading, error } = useQuery(GET_MENTOR, {
    variables: { id: mentorId }
  });

  if (loading) return <div>{mobile && <Spinner />}</div>;

  const mentor = data?.mentor;
  const {
    name,
    surname,
    position,
    mentorPicture,
    city,
    experience,
    linkedIn
  } = mentor;

  return (
    <React.Fragment>
      {mobile && <ScrollToTop />}
      <Modal id={Modals.contributor} className={styles.modal}>
        <div className={styles.modalPerson}>
          <img src={mentorPicture?.url} className={styles.modalPersonPhoto} />
          <div className={styles.modalPersonWrapper}>
            <div className={styles.contributorInfo}>
              <div className={styles.contributorInfo}>
                {name} {surname}
              </div>
              <div
                className={styles.contributorDetails}
                style={{ fontWeight: 400 }}
              >
                {city}, {position}
              </div>
              <div className={styles.contributorDetails}>United Kingdom</div>
            </div>
            <a href={linkedIn ? linkedIn : null}>
              <Icon name='linkedin' />
            </a>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalContentCaption}>Experience</div>
          <div className={styles.modalContentDescription}>
            {experience ? experience.text : 'No experience yet'}
          </div>
        </div>
        <Icon
          name='close-modal'
          className={styles.modalIcon}
          onClick={() => {
            dispatch(closeModal(Modals.contributor));
            hideComponent();
            history.goBack();
          }}
        />
      </Modal>
      {mobile && <Footer />}
    </React.Fragment>
  );
};

export { MentorModal };

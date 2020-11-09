import * as React from 'react';
import { MentorModalProps } from './mentor-modal.props';
import * as styles from './mentor-modal.scss';
import { Modal, Icon, Footer, RichTextDefault } from '@core/components';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { useMediaPoints } from '@core/shared';
import { Spinner } from '@core/components/spinner';
import { ScrollToTop } from '@app';
import ReactMarkdown from 'react-markdown';
import { State } from '@app/redux/state';

const GET_MENTOR = gql`
  query($id: String!, $locale: String!) {
    mentor(id: $id, locale: $locale) {
      name
      surname
      workAt
      position
      linkedIn
      mentorModalPicture {
        url
      }
      mentorPicture {
        url
      }
      from
      experience
    }
  }
`;
/**
 * Renders MentorModal
 */
const MentorModal: React.FC<MentorModalProps> = ({ mentorId }) => {
  const { language } = useSelector((state: State) => state.localization);

  const dispatch = useDispatch();
  const history = useHistory();

  console.log('render');

  const { data, loading, error } = useQuery(GET_MENTOR, {
    variables: { id: mentorId, locale: language }
  });

  if (loading) {
    return <Spinner />;
  }

  const {
    name,
    surname,
    position,
    mentorPicture,
    mentorModalPicture,
    from,
    experience,
    linkedIn,
    workAt
  } = data?.mentor;

  return (
    <React.Fragment>
      <Modal id={Modals.contributor} className={styles.modal}>
        <Icon
          name='close-modal'
          className={styles.modalIcon}
          onClick={() => {
            dispatch(closeModal(Modals.contributor));
          }}
        />
        <div className={styles.modalPerson}>
          <img
            src={mentorModalPicture?.url || mentorPicture?.url}
            className={styles.modalPersonPhoto}
          />
          <div className={styles.modalPersonWrapper}>
            <div className={styles.contributorInfo}>
              <div className={styles.contributorInfo}>
                {name} {surname}
              </div>
              <div
                className={styles.contributorDetails}
                style={{ fontWeight: 500 }}
              >
                {workAt}, {position}
              </div>
              <div className={styles.contributorDetails}>{from}</div>
            </div>
            <a href={linkedIn ? linkedIn : null}>
              <Icon name='linkedin' />
            </a>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalContentWrapper}>
            <div className={styles.modalContentDescription}>
              {experience ? (
                <ReactMarkdown
                  source={experience}
                  className={styles.markdown}
                />
              ) : (
                'No experience yet'
              )}
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export { MentorModal };

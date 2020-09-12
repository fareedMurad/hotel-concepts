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
import { isBackgroundWhite } from '@core/components/header/store';

const GET_MENTOR = gql`
  query($id: String!, $locale: String!) {
    mentor(id: $id, locale: $locale) {
      name
      surname
      workAt
      position
      linkedIn
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
const MentorModal: React.FC<MentorModalProps> = ({ hideComponent }) => {
  const { mobile } = useMediaPoints();
  const { language } = useSelector((state: State) => state.localization);

  const dispatch = useDispatch();
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const mentorId = searchParams.get('mentorId');
  const { data, loading, error } = useQuery(GET_MENTOR, {
    variables: { id: mentorId, locale: language }
  });
  const [mentor, setMentor] = React.useState({
    name: '',
    surname: '',
    position: '',
    mentorPicture: { url: '' },
    from: '',
    experience: '',
    linkedIn: '',
    workAt: ''
  });

  React.useEffect(() => {
    if (data) {
      setMentor(data?.mentor);
    }
    dispatch(isBackgroundWhite(true));
    return () => {
      setMentor({
        name: '',
        surname: '',
        position: '',
        mentorPicture: { url: '' },
        from: '',
        experience: '',
        linkedIn: '',
        workAt: ''
      });
      dispatch(isBackgroundWhite(false));
    };
  }, [data]);
  if (loading) return <div>{mobile && <Spinner />}</div>;

  const {
    name,
    surname,
    position,
    mentorPicture,
    from,
    experience,
    linkedIn,
    workAt
  } = mentor;

  return (
    <React.Fragment>
      {mobile && <ScrollToTop />}
      <Modal
        id={Modals.contributor}
        className={styles.modal}
        historyGoBack={true}
      >
        <div className={styles.modalPerson}>
          <img src={mentorPicture?.url} className={styles.modalPersonPhoto} />
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
            <div className={styles.modalContentCaption}>Experience</div>
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
      {/* {mobile && <Footer />} */}
    </React.Fragment>
  );
};

export { MentorModal };

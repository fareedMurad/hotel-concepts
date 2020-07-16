import * as React from 'react';
import { ContributorsContainerProps } from './contributors-container.props';
import * as styles from './contributors-container.scss';
import { H2, Paragraph, PreCaption } from '@core/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { Modals } from '@ui/models';
import { useDispatch } from 'react-redux';
import { showModal, closeModal } from '@ui/modal/actions';
import { navigate } from '@router/store';
import { useMediaPoints } from '@core/shared';
import { MentorModal } from '@pages/homepage/components/mentor-modal';
/**
 * Renders Contributor Card
 */
// todo , take a look this Contributor and MentorItem, delete one of them and use only one
const Contributor = ({ contributor, onClick }) => {
  const {
    name,
    surname,
    city,
    position,
    mentorPicture: { url },
    experience
  } = contributor;
  const dispatch = useDispatch();

  return (
    <div className={styles.contributor}>
      <div className={styles.contributorOverlay}>
        <div className={styles.contributorContent}>
          <div onClick={onClick} className={styles.contributorContentTitle}>
            Know about {name}
          </div>
        </div>
        <img src={url} className={styles.contributorPhoto} />
      </div>

      <div className={styles.contributorInfo}>
        {name} {surname}
      </div>
      <div className={styles.contributorDetails}>
        {city}, {position}
      </div>
    </div>
  );
};

/**
 * Renders ContributorsContainer
 */
// todo: add slider <- 1 2 3 4 5 -> for next contributors (check Contributors page in design)
const ContributorsContainer: React.FC<ContributorsContainerProps> = ({}) => {
  const { contributors, loading } = useContributorsData();
  const { mobile } = useMediaPoints();
  const [openedModal, setOpenedModal] = React.useState(null);
  const dispatch = useDispatch();

  return (
    <div className={styles.contributorsContainer}>
      <div className={styles.heading}>
        <PreCaption>Contributors</PreCaption>
        <H2 className={styles.headingTitle}>Meet the experts</H2>
        <Paragraph className={styles.headingParagraph}>
          Cordie participants can benefit from a wide spectrum of experts with
          diverse backgrounds. <br /> Our expert team are knowledge creators and
          industry leaders at the cutting edge of their fields.
        </Paragraph>
        <div className={styles.headingHr} />
        <div className={styles.headingStatistic}>
          <div>
            <H2>75+</H2>
            <div className={styles.headingCaption}>Teaching Experts</div>
          </div>
          <div>
            <H2>25+</H2>
            <div className={styles.headingCaption}>Nationalities</div>
          </div>
        </div>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <main className={styles.contributorsList}>
          {contributors?.map((contributor, index) => (
            <Contributor
              contributor={contributor}
              key={index}
              onClick={() => {
                dispatch(
                  navigate(
                    `/contributors/mentor/${contributor.slug}?mentorId=${contributor.sys.id}`
                  )
                );
                !mobile &&
                  (dispatch(showModal(Modals.contributor)),
                  setOpenedModal(true));
              }}
            />
          ))}
        </main>
      )}
      {openedModal && <MentorModal />}
    </div>
  );
};

export { ContributorsContainer, Contributor };

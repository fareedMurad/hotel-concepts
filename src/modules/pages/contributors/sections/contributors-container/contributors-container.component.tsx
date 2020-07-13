import * as React from 'react';
import { ContributorsContainerProps } from './contributors-container.props';
import * as styles from './contributors-container.scss';
import { H2, Paragraph, Modal, Icon, PreCaption } from '@core/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { Modals } from '@ui/models';
import { useDispatch } from 'react-redux';
import { showModal, closeModal } from '@ui/modal/actions';

/**
 * Renders Contributor Card
 */
const Contributor = ({ contributor, onClick, visibleModal }) => {
  const {
    id,
    name,
    surname,
    city,
    profession,
    photo,
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
        <img
          src={`${require(`img/${photo}.png`)}`}
          className={styles.contributorPhoto}
        />
      </div>

      <div className={styles.contributorInfo}>
        {name} {surname}
      </div>
      <div className={styles.contributorDetails}>
        {city}, {profession}
      </div>

      {visibleModal && (
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
      )}
    </div>
  );
};
/**
 * Renders ContributorsContainer
 */
const ContributorsContainer: React.FC<ContributorsContainerProps> = ({}) => {
  const { contributors } = useContributorsData();
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
      <main className={styles.contributorsList}>
        {contributors.map(contributor => (
          <Contributor
            contributor={contributor}
            key={contributor.id}
            onClick={() => {
              setOpenedModal(contributor.id);
              dispatch(showModal(Modals.contributor));
            }}
            visibleModal={openedModal === contributor.id}
          />
        ))}
      </main>
    </div>
  );
};

export { ContributorsContainer };

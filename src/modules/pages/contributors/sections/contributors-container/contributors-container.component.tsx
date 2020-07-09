import * as React from 'react';
import { ContributorsContainerProps } from './contributors-container.props';
import * as styles from './contributors-container.scss';
import { H2, Paragraph, Modal, Icon } from '@core/components';
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
      <img
        src={`${require(`img/contributors/${photo}.png`)}`}
        className={styles.contributorPhoto}
      />
      <div className={styles.contributorInfo}>
        <div className={styles.contributorInfoPerson}>
          {name} {surname}
        </div>
        <div className={styles.contributorInfoDetails}>
          {city}, {profession}
        </div>
      </div>
      <div className={styles.contributorHidden}>
        <div className={styles.contributorHiddenContent}>
          <div onClick={onClick}>Know about {name}</div>
        </div>
      </div>
      {visibleModal && (
        <Modal id={Modals.contributor} className={styles.modal}>
          <div className={styles.modalPerson}>
            <img
              src={`${require(`img/contributors/${photo}.png`)}`}
              className={styles.modalPersonPhoto}
            />
            <div className={styles.modalPersonWrapper}>
              <div className={styles.contributorInfo}>
                <div className={styles.contributorInfoPerson}>
                  {name} {surname}
                </div>
                <div className={styles.contributorInfoDetails}>
                  {city}, {profession}
                </div>
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

  const menuRef = React.useRef();
  // useClickOutside(menuRef, () => setShowModal(false));
  const dispatch = useDispatch();

  return (
    <div className={styles.contributorsContainer}>
      <div className={styles.heading}>
        <div className={styles.headingCaption}>Contributors</div>
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
      <main className={styles.contributorsList} ref={menuRef}>
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

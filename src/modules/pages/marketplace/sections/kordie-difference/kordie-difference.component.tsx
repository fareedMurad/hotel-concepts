import { State } from '@app/redux/state';
import { Button, Slider, Spinner } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { ContributorCard, MentorModal } from '@pages/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { navigate } from '@router/store';
import { showModal, toogleContributorModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './kordie-difference.scss';
import { useState } from 'react';
/**
 * Slider responsive
 */
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1025 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders KordieDifference
 */
const KordieDifference: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: State) => state.localization);
  const { contributors } = useContributorsData(language);
  const { tablet } = useMediaPoints();
  const [mentorId, setMentorId] = useState('');
  const { contributorModal } = useSelector((state: State) => state.ui.modal);
  return (
    <div className={styles.kordieDifference}>
      <div className={styles.head}>
        <div className={styles.title}>Kordie difference</div>
        <div className={styles.caption}>
          How we bring you the best knowledge
        </div>
        <div className={styles.authors}>
          <div className={styles.authorsCaption}>Great authors</div>
          <div className={styles.authorsDescription}>
            World-class faculty introduce you to the very latest in hospitality
            business knowledge and provide you with the tools and skills to
            overcome challenges and find solutions.
          </div>
        </div>
      </div>
      {contributors ? (
        <div className={styles.contributors}>
          <Slider
            className={styles.slider}
            responsive={responsive}
            controls
            controlsClassname={styles.sliderControls}
            controlClassname={styles.sliderControl}
          >
            {contributors?.map((contributor, index) => (
              <ContributorCard
                // className={styles.contributor}
                contributor={contributor}
                onClick={() => {
                  setMentorId(contributor.sys.id);
                  dispatch(showModal(Modals.contributor));
                  // dispatch(toogleContributorModal(true));
                }}
                key={index}
              />
            ))}
          </Slider>
          {mentorId && (
            <MentorModal
              mentorId={mentorId}
              // hideComponent={() => dispatch(toogleContributorModal(false))}
            />
          )}
          <Button
            className={styles.seeAll}
            arrow
            onClick={() => dispatch(navigate('/contributors'))}
          >
            See All Contributors
          </Button>
        </div>
      ) : (
        <Spinner />
      )}
      <div className={styles.descriptions}>
        <div className={styles.topics}>
          <div className={styles.topicsCaption}>Timely topics</div>
          <div className={styles.topicsSubcaption}>
            Analytics is our priority.
          </div>
          <div className={styles.topicsDescription}>
            Our subscription puts the most comprehensive library of travel
            research and data visualisation at your fingertips. We deliver
            timely content to help executives make strategic decisions based on
            deep industry knowledge and the latest consumer and technology
            trends.
          </div>
        </div>
        <div className={styles.books}>
          <div className={styles.booksCaption}>Beautifully created content</div>
          <div className={styles.booksDescription}>
            Our ebooks and materials developed in team with designers and UI
            professionals -
            <span className={styles.booksDescriptionBold}>
              to make your learning a pleasure.
            </span>
          </div>
          <div className={styles.decoration}>
            <div />
            <div />
          </div>
          <div className={styles.booksPreview}>
            <img
              className={styles.booksBook}
              src={require('img/marketplace/book1')}
              alt='book1'
            />
            <img
              className={styles.booksBook}
              src={require('img/marketplace/book2')}
              alt='book2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { KordieDifference };

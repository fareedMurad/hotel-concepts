import * as React from 'react';
import { useState } from 'react';
import { ProgramMentorsProps } from './program-mentors.props';
import * as styles from './program-mentors.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useHistory } from 'react-router';
import { showModal, toogleContributorModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { MentorModal } from '@pages/components/mentor-modal';
import { ContributorCard } from '@pages/components';
import { Spinner } from '@core/components/spinner';
import { SectionTitle, Hr, PreCaption } from '@core/components';
import classNames from 'classnames';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1290, min: 1000 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders ProgramMentors
 */
const ProgramMentors: React.FC<ProgramMentorsProps> = ({
  contributors,
  url,
  modifiedCaption
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => history.push(`/contributors`);

  const [mentorId, setMentorId] = useState('');

  if (!contributors)
    return <div className={styles.noMentors}>No mentors yet</div>;

  return (
    <React.Suspense fallback={<Spinner />}>
      <section
        className={classNames(styles.mentors, {
          [styles.mentorsModified]: modifiedCaption
        })}
      >
        <div
          className={classNames(styles.title, {
            [styles.titleModified]: !modifiedCaption
          })}
        >
          <SectionTitle>
            {modifiedCaption && (
              <PreCaption className={styles.preCaption}>
                Meet the faculty
              </PreCaption>
            )}
            Meet Your Instructors
          </SectionTitle>
          <Hr className={styles.hr} />
          <div>
            World-class faculty introduce you to the very latest in hospitality
            business knowledge and provide you with the tools and skills to
            overcome challenges and find solutions.
          </div>
        </div>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          responsive={responsiveBreakpoints}
          customButtonGroup={
            <SliderButtons
              onClick={handleClick}
              className={styles.controls}
              isBordered
              btnText='See All Contributors'
            />
          }
        >
          {contributors.map((contributor, index) => (
            <ContributorCard
              contributorPicture={contributor.mentorPicture.file.url}
              contributor={contributor}
              key={index}
              onClick={() => {
                dispatch(toogleContributorModal(contributor.id));
              }}
            />
          ))}
        </Slider>
        <MentorModal />
      </section>
    </React.Suspense>
  );
};

export { ProgramMentors };

import * as React from 'react';
import { MentorsProps } from './mentors.props';
import * as styles from './mentors.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useHistory } from 'react-router';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { useDispatch } from 'react-redux';
import { MentorModal } from '@pages/components/mentor-modal';
import { navigate } from '@router/store';
import { useMediaPoints } from '@core/shared';
import { ContributorCard } from '@pages/components';

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
 * Renders Mentors
 */
const Mentors: React.FC<MentorsProps> = ({ contributors, loading }) => {
  const { mobile, tablet } = useMediaPoints();
  const history = useHistory();
  const [openedModal, setOpenedModal] = React.useState(false);
  const dispatch = useDispatch();

  const handleClick = () => history.push(`/contributors`);

  if (loading) return <div>loading...</div>;

  return (
    <section className={styles.mentors}>
      <div className={styles.title}>
        <div>Meet mentors & Coauthors</div>
        <div />
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
        {contributors.map((contributor, index) => {
          return (
            <ContributorCard
              contributor={contributor}
              key={index}
              onClick={() => {
                dispatch(
                  navigate(
                    `/mentor/${contributor.slug}?mentorId=${contributor.sys.id}`
                  )
                );
                !mobile &&
                  (dispatch(showModal(Modals.contributor)),
                  setOpenedModal(true));
              }}
            />
          );
        })}
      </Slider>
      {openedModal && <MentorModal />}
    </section>
  );
};

export { Mentors };

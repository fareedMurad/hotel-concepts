import * as React from 'react';
import { MentorsProps } from './mentors.props';
import * as styles from './mentors.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useHistory } from 'react-router';
import { showModal, toogleContributorModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { useDispatch, useSelector } from 'react-redux';
import { MentorModal } from '@pages/components/mentor-modal';
import { navigate } from '@router/store';
import { useMediaPoints } from '@core/shared';
import { ContributorCard } from '@pages/components';
import { Spinner } from '@core/components/spinner';
import { State } from '@app/store/state';
import { SectionTitle, Hr, PreCaption } from '@core/components';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

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
const Mentors: React.FC<MentorsProps> = ({
  contributors,
  loading,
  url,
  modifiedCaption
}) => {
  const { mobile, tablet } = useMediaPoints();
  const history = useHistory();
  const { contributorModal } = useSelector((state: State) => state.ui.modal);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => history.push(`/contributors`);

  if (loading) return <Spinner />;
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
            {t('home.mentors.title')}
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
              contributor={contributor}
              key={index}
              onClick={() => {
                dispatch(
                  navigate(
                    `${url}/${contributor.slug}?&mentorId=${contributor.sys.id}`
                  )
                );
                !mobile &&
                  (dispatch(showModal(Modals.contributor)),
                  dispatch(toogleContributorModal(true)));
              }}
            />
          ))}
        </Slider>
        {contributorModal && (
          <MentorModal
            hideComponent={() => dispatch(toogleContributorModal(false))}
          />
        )}
      </section>
    </React.Suspense>
  );
};

export default React.memo(Mentors);

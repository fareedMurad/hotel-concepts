import * as React from 'react';
import * as styles from './mentors.scss';
import { SectionTitle, Hr, PreCaption } from '@core/components';
import { showModal, toogleContributorModal } from '@ui/modal';
import { useDispatch, useSelector } from 'react-redux';
import { ContributorCard } from '@pages/components';
import { MentorModal } from '@pages/components/mentor-modal';
import { MentorsProps } from './mentors.props';
import { Modals } from '@ui/models';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { Spinner } from '@core/components/spinner';
import { State } from '@app/redux/state';
import classNames from 'classnames';
import { navigate } from '@router/store';
import { useHistory } from 'react-router';
import { useMediaPoints } from '@core/shared';
import { useState } from 'react';
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
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => history.push(`/contributors`);

  const [mentorId, setMentorId] = useState('');

  const handleOpenModalMobile = contributor => {
    dispatch(
      navigate(`${url}/${contributor.slug}?&mentorId=${contributor.sys.id}`)
    );
    dispatch(showModal(Modals.contributor));
  };

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
          <div>{t('home.mentors.description')}</div>
        </div>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={true}
          responsive={responsiveBreakpoints}
          customButtonGroup={
            <SliderButtons
              onClick={handleClick}
              className={styles.controls}
              isBordered
              btnText={t('home.mentors.button-text')}
            />
          }
        >
          {contributors.map((contributor, index) => (
            <ContributorCard
              contributor={contributor}
              key={index}
              onClick={() => {
                dispatch(toogleContributorModal(contributor.sys.id));
              }}
            />
          ))}
        </Slider>
        <MentorModal />
      </section>
    </React.Suspense>
  );
};

export default React.memo(Mentors);

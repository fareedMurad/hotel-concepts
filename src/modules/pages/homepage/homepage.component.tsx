import * as React from 'react';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import { Footer, Spinner } from '@core/components';
import { FaqBlock } from '@pages/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import {
  SupportInfo,
  OnlineCourses,
  Quote,
  About,
  TrainingInfo,
  Impact,
  InsightsBlock,
  Socials,
  Intro
} from './sections';
import { useHomePageData } from './homepage.hook';
import Mentors from '@pages/homepage/sections/mentors/mentors.component';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { contributors, loading } = useContributorsData(language);
  const {
    homePageTestimonials,
    homepageTestimonialsLoading
  } = useHomePageData();

  return (
    <React.Suspense fallback={<Spinner />}>
      <div className={styles.homepage}>
        <Intro />
        <SupportInfo />
        <OnlineCourses />
        <Quote />
        <About />
        <TrainingInfo />
        <Impact
          testimonials={homePageTestimonials}
          loading={homepageTestimonialsLoading}
        />
        <Mentors contributors={contributors} loading={loading} url='mentor' />
        <FaqBlock showTitle />
        <InsightsBlock />
        <Socials />
        {/* <Footer /> */}
      </div>
    </React.Suspense>
  );
};

export { Homepage };

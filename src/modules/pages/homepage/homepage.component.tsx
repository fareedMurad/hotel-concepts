import * as React from 'react';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import { Header } from '@core/components/header';
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
  Mentors,
  InsightsBlock,
  Socials,
  Intro
} from './sections';
import { useHomePageData } from './homepage.hook';

/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  const { contributors, loading } = useContributorsData();
  const {
    homePageTestimonials,
    homepageTestimonialsLoading
  } = useHomePageData();

  return (
    <React.Suspense fallback={<Spinner />}>
      <div className={styles.homepage}>
        <Header />
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

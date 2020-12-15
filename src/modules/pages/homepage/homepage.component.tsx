import { State } from '@app/redux/state';
import { Spinner } from '@core/components';
import { FaqBlock } from '@pages/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import Mentors from '@pages/homepage/sections/mentors/mentors.component';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHomePageData } from './homepage.hook';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import {
  About,
  Impact,
  InsightsBlock,
  Intro,
  OnlineCourses,
  Socials,
  SupportInfo,
  TrainingInfo,
  UnlimitedAccessBooks
} from './sections';
import { EBooks } from './sections/e-books';
/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  const {
    localization: { language }
  } = useSelector((state: State) => state);
  const { contributors, loading } = useContributorsData(language);
  const { homePageTestimonials, homepageTestimonialsLoading } = useHomePageData(
    language
  );

  return (
    <React.Suspense fallback={<Spinner />}>
      <div className={styles.homepage}>
        <Intro />
        <SupportInfo />
        <OnlineCourses />
        <TrainingInfo />
        <EBooks />
        <UnlimitedAccessBooks />
        {/* <UnlimitedAccess />
         */}
        {/* <Quote /> */}
        <About />
        <Impact
          testimonials={homePageTestimonials}
          loading={homepageTestimonialsLoading}
        />
        <Mentors contributors={contributors} loading={loading} url='mentor' />
        <FaqBlock showTitle />
        <InsightsBlock />
        <Socials />
      </div>
    </React.Suspense>
  );
};

export { Homepage };

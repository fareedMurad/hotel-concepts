import * as React from 'react';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
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

/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  const { contributors, loading } = useContributorsData();

  return (
    <div className={styles.homepage}>
      <Header />
      <Intro />
      <SupportInfo />
      <OnlineCourses />
      <Quote />
      <About />
      <TrainingInfo />
      <Impact />
      {/* <Mentors contributors={contributors} loading={loading} url='mentor' /> */}
      <FaqBlock showTitle />
      <InsightsBlock />
      <Socials />
      <Footer />
    </div>
  );
};

export { Homepage };

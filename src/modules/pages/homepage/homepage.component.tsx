import * as React from 'react';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import { Intro } from './sections/intro';
import { SupportInfo } from './sections/support-info';
import { OnlineCourses } from './sections/online-courses';
import { Quote } from './sections/quote';
import { About } from './sections/about';
import { TrainingInfo } from './sections/training-info';
import { Impact } from './sections/impact';
import { Mentors } from './sections/mentors';
import { InsightsBlock } from './sections/insights-block';
import { Socials } from './sections/socials';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
import { FaqBlock } from '@pages/components';

/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
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
      <Mentors />
      <FaqBlock />
      <InsightsBlock />
      <Socials />
      <Footer />
    </div>
  );
};

export { Homepage };

import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Mentors } from '@pages/homepage/sections/mentors';
import { Impact } from '@pages/homepage/sections/impact';
import { FaqBlock } from '@pages/homepage/sections/faq-block';
import { Footer } from '@core/components';
import { ProgramIntro } from './sections/program-intro';
import { ProgramOverview } from './sections/program-overview';
import { ProgramAbout } from './sections/program-about';
import { Enroll } from './sections/enroll';
import { ProgramResults } from './sections/program-results';
import { ProgramMaterials } from './sections/program-materials';
import { ProgramQuote } from './sections/program-quote';
import { ProgramLearningApproach } from './sections/program-learning-approach';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  return (
    <div className={styles.programPage}>
      <Header />
      <ProgramIntro />
      <ProgramOverview />
      <div className={styles.hr}></div>
      <ProgramAbout />
      <div className={styles.hr}></div>
      <Enroll />
      <div className={styles.img}></div>
      <ProgramResults />
      <Mentors />
      <ProgramLearningApproach />
      <ProgramMaterials />
      <Impact />
      <ProgramQuote />
      <div className={styles.faqTitle}>Frequently Asked Questions</div>
      <FaqBlock />
      <Footer />
    </div>
  );
};

export { ProgramPage };

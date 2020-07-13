import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Mentors } from '@pages/homepage/sections/mentors';
import { Impact } from '@pages/homepage/sections/impact';
import { Footer } from '@core/components';
import { ProgramIntro } from './sections/program-intro';
import { ProgramOverview } from './sections/program-overview';
import { ProgramAbout } from './sections/program-about';
import { Enroll } from './sections/enroll';
import { ProgramResults } from './sections/program-results';
import { ProgramMaterials } from './sections/program-materials';
import { ProgramQuote } from './sections/program-quote';
import { ProgramLearningApproach } from './sections/program-learning-approach';
import { FaqBlock } from '..';
import { ProgramEnrollNow } from './sections/program-enroll-now';
import { useParams } from 'react-router';
import { useProgramPageData } from './program-page.hook';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const { id } = useParams();
  const { data } = useProgramPageData();
  const pageData = data.filter(item => item.id == id)[0];

  return (
    <div className={styles.programPage}>
      <Header />
      <ProgramIntro introInfo={pageData.introInfo} />
      <ProgramOverview overview={pageData.overview} />
      <div className={styles.hr}></div>
      <ProgramAbout about={pageData.about} />
      <div className={styles.hr}></div>
      <Enroll shouldEnroll={pageData.shouldEnroll} />
      <div className={styles.img}></div>
      <ProgramResults />
      <Mentors />
      <ProgramLearningApproach learningApproach={pageData.learningApproach} />
      <ProgramMaterials />
      <Impact />
      <div className={styles.hr}></div>
      <ProgramEnrollNow enrollInfo={pageData.enrollInfo} />
      <ProgramQuote />
      <div className={styles.faqTitle}>Frequently Asked Questions</div>
      <FaqBlock />
      <Footer />
    </div>
  );
};

export { ProgramPage };

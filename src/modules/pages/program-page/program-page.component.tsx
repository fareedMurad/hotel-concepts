import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Mentors } from '@pages/homepage/sections/mentors';
import { Impact } from '@pages/homepage/sections/impact';
import { FaqBlock } from '@pages/homepage/sections/faq-block';
import { Footer } from '@core/components';
import { ProgramIntro } from './sections/program-intro';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  return (
    <div className={styles.programPage}>
      <Header />
      <ProgramIntro />
      <Mentors />
      <Impact />
      <FaqBlock />
      <Footer />
    </div>
  );
};

export { ProgramPage };

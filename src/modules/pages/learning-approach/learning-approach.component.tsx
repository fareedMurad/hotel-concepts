import * as React from 'react';
import * as styles from './learning-approach.scss';
import { Header } from '@core/components/header';
import { Icon, H1, H2, Paragraph, Footer } from '@core/components';
import {
  WhatWeTeach,
  HowWeTeach,
  ExperiencedAssignment,
  OurMaterials,
  ReadingMaterials
} from './sections';
import { HeroBottom } from './sections/hero-bottom';

const Hr = () => <div className={styles.hr} />;
/**
 * Renders Learning approach page
 */
const LearningApproach: React.FC = ({}) => {

  return (
  <div className={styles.main}>
      <div className={styles.header}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${require('img/learning-approach/home.png')})`
          }}
          className={styles.image}
        />
        <main className={styles.headerContent}>
          <H1 className={styles.headerCaption}>Our Learning Approach</H1>
          <div className={styles.headerDescription}>
            Experience transformational hospitality e-learning bringing together
            the best in industry and academia, dedicated mentorship, new
            technologies and intensive support
          </div>
        </main>
        <div className={styles.arrow}>&#8595; Scroll</div>
      </div>
      <div className={styles.meetKordie}>
        <Icon name='abstract-1' />
        <H2 className={styles.meetKordieTitle}>Meet Kordie</H2>
        <Paragraph className={styles.meetKordieDescription}>
          Kordie - is online university for hospitality. We deliver practical
          programs and courses developed in team with key industry leaders, most
          relevant approach to education, case based assignments and mentorship
          from leading experts.
        </Paragraph>
      </div>
      <Hr />
      <WhatWeTeach />
      <Hr />
      <HowWeTeach />
      <ExperiencedAssignment />
      <Hr />
      <OurMaterials />
      <ReadingMaterials />
      <HeroBottom />
      <Footer />
    </div>
  );
};

export { LearningApproach };

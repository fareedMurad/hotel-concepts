import * as React from 'react';
import { HomeProps } from './home.props';
import * as styles from './home.scss';
import { Header } from '@core/components/header';
import { useHomeData } from './home.hook';
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
 * Renders Home
 */
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${require('img/home/home.png')})`
          }}
          className={styles.image}
        />
        <main className={styles.headerContent}>
          {/* <div className={styles.headerCaption}>Our Learning Approach </div> */}
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
        <Icon name='home/abstract-1' />
        <H2 className={styles.meetKordieTitle}>Meet Kordie</H2>
        <Paragraph className={styles.meetKordieDescription}>
          Kordie - is online university for hospitality. We deliver practical
          programs and courses developed in team with key industry leaders, most
          relevant approach to education, case based assignments and mentorship
          from leading experts.
        </Paragraph>
      </div>
      <Hr />
      {/* TEACH SECTION */}
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

export { Home };

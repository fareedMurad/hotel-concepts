import * as React from 'react';
import { HomeProps } from './home.props';
import * as styles from './home.scss';
import { Header } from '@core/components/header';
import { useHomeData } from './home.hook';
import { Icon } from '@core/components';
import {
  WhatWeTeach,
  HowWeTeach,
  ExperiencedAssignment,
  OurMaterials
} from './sections';

const Hr = () => <div className={styles.hr} />;
/**
 * Renders Home
 */
const Home: React.FC<HomeProps> = ({}) => {
  const { navigation } = useHomeData();
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header navigation={navigation} />
        <div
          style={{
            backgroundImage: `url(${require('img/home.png')})`
          }}
          className={styles.image}
        />
        <main className={styles.headerContent}>
          <div className={styles.headerCaption}>Our Learning Approach </div>
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
        <div className={styles.meetKordieTitle}>Meet Kordie</div>
        <div className={styles.meetKordieDescription}>
          Kordie - is online university for hospitality. We deliver practical
          programs and courses developed in team with key industry leaders, most
          relevant approach to education, case based assignments and mentorship
          from leading experts.
        </div>
      </div>
      <Hr />
      {/* TEACH SECTION */}
      <WhatWeTeach />
      <Hr />
      <HowWeTeach />
      <ExperiencedAssignment />
      <Hr />
      <OurMaterials />
    </div>
  );
};

export { Home };

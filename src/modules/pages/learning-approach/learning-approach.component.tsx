import * as React from 'react';
import * as styles from './learning-approach.scss';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
import {
  WhatWeTeach,
  HowWeTeach,
  ExperiencedAssignment,
  OurMaterials,
  ReadingMaterials
} from './sections';
import { HeroBottom } from './sections/hero-bottom';
import { Hero } from './sections/hero';
import { MeetKordie } from './sections/meet-kordie';

const Hr = () => <div className={styles.hr} />;
/**
 * Renders Learning approach page
 */
const LearningApproach: React.FC = ({}) => (
  <div className={styles.main}>
    <Header />
    <Hero />
    <MeetKordie />
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

export { LearningApproach };

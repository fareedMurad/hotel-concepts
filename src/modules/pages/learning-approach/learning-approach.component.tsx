import * as React from 'react';
import * as styles from './learning-approach.scss';
import {
  WhatWeTeach,
  HowWeTeach,
  ExperiencedAssignment,
  OurMaterials,
  ReadingMaterials
} from './sections';
import { Footer } from '@core/components';
import { FooterHeroLearningApproach } from './sections/footer-hero-learning-approach';
import { HeroLearningApproach } from './sections/hero-learning-approach';
import { MeetKordie } from './sections/meet-kordie';
import { ScrollToTop } from '@app';

const Hr = () => <div className={styles.hr} />;
/**
 * Renders Learning approach page
 */
const LearningApproach: React.FC = ({}) => (
  <div className={styles.main}>
    <ScrollToTop />
    <HeroLearningApproach />
    <MeetKordie />
    <Hr />
    <WhatWeTeach />
    <Hr />
    <HowWeTeach />
    <ExperiencedAssignment />
    <Hr />
    <OurMaterials />
    <ReadingMaterials />
    <FooterHeroLearningApproach />
    {/* <Footer /> */}
  </div>
);

export { LearningApproach };

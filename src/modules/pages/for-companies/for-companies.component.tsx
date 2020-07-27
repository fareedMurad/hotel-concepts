import * as React from 'react';
import { ForCompaniesProps } from './for-companies.props';
import * as styles from './for-companies.scss';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
import {
  TalentMatters,
  Benefits,
  HowWeWork,
  OurApproach,
  WhyCordie,
  OurPrograms,
  IncreaseYourCompetitive,
  Brochure,
  ConsultRequest,
  Intro
} from './sections';

/**
 * Renders ForCompanies
 */
const ForCompanies: React.FC<ForCompaniesProps> = ({}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.forCompanies}>
      <Header />
      <Intro />
      <TalentMatters />
      <Benefits />
      <HowWeWork />
      <OurApproach />
      <WhyCordie />
      <OurPrograms />
      <IncreaseYourCompetitive />
      <Brochure />
      <ConsultRequest />
      <Footer />
    </div>
  );
};

export { ForCompanies };

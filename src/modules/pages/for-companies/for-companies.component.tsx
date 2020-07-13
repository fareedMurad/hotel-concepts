import * as React from 'react';
import { ForCompaniesProps } from './for-companies.props';
import * as styles from './for-companies.scss';
import { Header } from '@core/components/header';
import { H1, Button, H3, Icon, Paragraph, Footer } from '@core/components';
import { Benefits } from './sections/benefits';
import { HowWeWork } from './sections/how-we-work';
import { OurApproach } from './sections/our-approach';
import { WhyCordie } from './sections/why-cordie';
import { OurPrograms } from './sections/our-programs';
import { Brochure } from './sections/brochure';
import { ConsultRequest } from './sections/consult-request';
import { ScrollButton } from '@core/components/scroll-button';
import { Intro } from './sections/intro';
import { TalentMatters } from './sections/talent-matters';
import { IncreaseYourCompetitive } from './sections/increase-your-competitive';

/**
 * Renders ForCompanies
 */
const ForCompanies: React.FC<ForCompaniesProps> = ({}) => {
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

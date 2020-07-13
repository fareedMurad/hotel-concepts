import * as React from 'react';
import { CoursePartnershipProps } from './course-partnership.props';
import * as styles from './course-partnership.scss';
import { Header } from '@core/components/header';
import { H1, Button, Icon, H2, Paragraph, Footer } from '@core/components';
import { HowBecomePartner } from './sections';
import { PartnerBenefits } from './sections/partner-benefits';
import { Criteria } from './sections/criteria';
import { PartnerApply } from '@pages/components';
import { ScrollButton } from '@core/components/scroll-button';
import { Hero } from './sections/hero';
import { PartneringForSuccess } from './sections/partnering-for-success';

/**
 * Renders Course
 */
const CoursePartnership: React.FC<CoursePartnershipProps> = ({}) => {
  return (
    <div className={styles.course}>
      <Header />
      <Hero />
      <PartneringForSuccess />
      <HowBecomePartner />
      <PartnerBenefits />
      <Criteria />
      <PartnerApply />
      <Footer />
    </div>
  );
};

export { CoursePartnership };

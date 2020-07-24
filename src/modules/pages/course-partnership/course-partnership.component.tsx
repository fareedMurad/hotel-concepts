import * as React from 'react';
import { CoursePartnershipProps } from './course-partnership.props';
import * as styles from './course-partnership.scss';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
import { HowBecomePartner } from './sections';
import { PartnerBenefits } from './sections/partner-benefits';
import { Criteria } from './sections/criteria';
import { PartnerApply } from '@pages/components';
import { Hero } from './sections/hero';
import { PartneringForSuccess } from './sections/partnering-for-success';
import { ScrollToTop } from '@app';

/**
 * Renders Course
 */
const CoursePartnership: React.FC<CoursePartnershipProps> = ({}) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Hero />
      <PartneringForSuccess />
      <HowBecomePartner />
      <PartnerBenefits />
      <Criteria />
      <PartnerApply
        title='Want to get involved?'
        subtitle='We’re always happy to talk if you are interested in becoming a Partner'
      />
      <Footer />
    </React.Fragment>
  );
};

export { CoursePartnership };

import * as React from 'react';
import { CoursePartnershipProps } from './course-partnership.props';
import * as styles from './course-partnership.scss';

import { Footer } from '@core/components';
import { PartnerApply } from '@pages/components';
import { ScrollToTop } from '@app';
import {
  PartneringForSuccess,
  HowBecomePartner,
  PartnerBenefits,
  Criteria,
  CoursePartnershipHero
} from './sections';

/**
 * Renders Course
 */
const CoursePartnership: React.FC<CoursePartnershipProps> = ({}) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <CoursePartnershipHero />
      <PartneringForSuccess />
      <HowBecomePartner />
      <PartnerBenefits />
      <Criteria />
      <PartnerApply
        title='Want to get involved?'
        subtitle='We’re always happy to talk if you are interested in becoming a Partner'
      />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export { CoursePartnership };

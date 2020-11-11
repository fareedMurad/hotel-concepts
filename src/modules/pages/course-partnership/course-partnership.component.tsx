import * as React from 'react';
import * as styles from './course-partnership.scss';
import {
  CoursePartnershipHero,
  Criteria,
  HowBecomePartner,
  PartnerBenefits,
  PartneringForSuccess
} from './sections';
import { PartnerApply } from '@pages/components';
import { ScrollToTop } from '@app';

/**
 * Renders Course
 */
const CoursePartnership: React.FC = () => (
  <div className={styles.coursePartnership}>
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
  </div>
);

export { CoursePartnership };

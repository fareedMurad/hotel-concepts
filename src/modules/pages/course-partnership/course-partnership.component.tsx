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
      subtitle='If you’re interested in becoming a partner, want more information or have further questions please drop us a message'
    />
    {/* <Footer /> */}
  </div>
);

export { CoursePartnership };

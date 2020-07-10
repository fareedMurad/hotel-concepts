import * as React from 'react';
import { CoursePartnershipProps } from './course-partnership.props';
import * as styles from './course-partnership.scss';
import { Header } from '@core/components/header';
import { H1, Button, Icon, H2, Paragraph, Footer } from '@core/components';
import { HowBecomePartner } from './sections';
import { PartnerBenefits } from './sections/partner-benefits';
import { Criteria } from './sections/criteria';
import { PartnerApply } from '@pages/components';

/**
 * Renders Course
 */
const CoursePartnership: React.FC<CoursePartnershipProps> = ({}) => {
  return (
    <div className={styles.course}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${require('img/course/course.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.header}>
          <Header />
        </div>
        <main className={styles.wrapperContent}>
          <H1 className={styles.wrapperCaption}>
            Program Partnership with Kordie
          </H1>
          <div className={styles.wrapperDescription}>
            Combining Kordie’ expertise with the <br /> insights of industry
            leaders
          </div>
          <Button className={styles.button}>
            <div>Contact Us</div>
            <div>&rarr;</div>
          </Button>
        </main>
        <div className={styles.arrow}>&#8595; Scroll</div>
      </div>
      <div className={styles.partnering}>
        <Icon name='abstract-1' />
        <H2>Partnering for Success</H2>
        <Paragraph>
          Kordie is proud to partner with a select number of <br />{' '}
          organisations, partnerships which allow us to provide <br /> access to
          exclusive knowledge and practice for <br /> specific sectors.
        </Paragraph>
      </div>
      <div className={styles.hr} />
      <div className={styles.howProgram}>
        <H2 className={styles.howProgramTitle}>
          How Program <br /> Partnership works?
        </H2>
        <div className={styles.howProgramDescription}>
          <div className={styles.howProgramDescriptionBlock}>
            A Kordie partner is an organisation that creates courses together
            with us by sharing knowledge and expertise.
          </div>
          <div className={styles.howProgramDescriptionBlock}>
            A partner engages in creating the program content, with guidance
            from us on learning design, and we then work together to put the
            course onto the platform.
          </div>
        </div>
      </div>
      <HowBecomePartner />
      <PartnerBenefits />
      <Criteria />
      <PartnerApply />
      <Footer />
    </div>
  );
};

export { CoursePartnership };

import * as React from 'react';
import { JobDetailsProps } from './job-details.props';
import * as styles from './job-details.scss';
import classNames from 'classnames';
import { JobApply } from './components/job-apply';
import { useJobDetailsData } from './job-details.hook';
import { H2, Paragraph, H5, H3 } from '@core/components';
import { Header } from '@core/components/header';

/**
 * Renders JobPage
 */
const JobDetails: React.FC<JobDetailsProps> = ({ title, body, location }) => {
  // const { jobDetails } = useJobDetailsData();

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div className={styles.jobPage}>
        <div className={styles.back}>
          <div>&#8592;</div>
          <div>Back</div>
        </div>
        <section className={styles.sectionA}>
          <H2>
            {/* {title} */}
            Project Manager, <br /> Hardware.
          </H2>
          <H5 className={styles.titleOrange}>
            {/* {location} */}
            London, United Kingdom
          </H5>
          <Paragraph>
            {/* {body} */}
            We are looking for a passionate and seasoned Project Manager that{' '}
            <br />
            will contribute in the creation of innovative Spotify experiences
            via
            <br />
            connected hardware. You will manage the overall program <br />{' '}
            execution for internet-connected cars and work with suppliers to{' '}
            <br /> deliver the optimal Spotify experience to millions of users.
            Above <br /> all, your work will impact the way the world
            experiences music.
          </Paragraph>
        </section>
        <section className={styles.sectionB}>
          <H3 className={styles.titleOrange}>Apply for this job</H3>
          <Paragraph>
            {' '}
            If you would like to take this module <br /> separately from a
            program, please contact us
          </Paragraph>
        </section>
        <JobApply />
      </div>
    </React.Fragment>
  );
};

export { JobDetails };

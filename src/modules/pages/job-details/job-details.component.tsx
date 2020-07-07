import * as React from 'react';
import { JobDetailsProps } from './job-details.props';
import * as styles from './job-details.scss';
import classNames from 'classnames';
import { JobApply } from './components/job-apply';
import { useJobDetailsData } from './job-details.hook';

/**
 * Renders JobPage
 */
const JobDetails: React.FC<JobDetailsProps> = ({}) => {
  // const { jobDetails } = useJobDetailsData();
  return (
    <div className={styles.jobPage}>
      <div className={styles.back}>
        <div>&#8592;</div>
        <div>Back</div>
      </div>
      <section className={styles.sectionA}>
        <div className={styles.sectionATitle}>
          Project Manager, <br /> Hardware.
        </div>
        <div className={styles.sectionASubtitle}>London, United Kingdom</div>
        <div className={styles.sectionADescription}>
          We are looking for a passionate and seasoned Project Manager that{' '}
          <br />
          will contribute in the creation of innovative Spotify experiences via
          <br />
          connected hardware. You will manage the overall program <br />{' '}
          execution for internet-connected cars and work with suppliers to{' '}
          <br /> deliver the optimal Spotify experience to millions of users.
          Above <br /> all, your work will impact the way the world experiences
          music.
        </div>
      </section>
      <section className={styles.sectionB}>
        <div className={styles.sectionBTitle}>Apply for this job</div>
        <div className={styles.sectionBDescription}>
          If you would like to take this module <br /> separately from a
          program, please contact us
        </div>
      </section>
      <JobApply />
    </div>
  );
};

export { JobDetails };

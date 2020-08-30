import * as React from 'react';
import { JobDetailsProps } from './job-details.props';
import * as styles from './job-details.scss';
import { JobApply } from './components/job-apply';
import {
  Paragraph,
  H3,
  Footer,
  Spinner,
  SectionTitle,
  PreCaption,
  RichTextDefault
} from '@core/components';

import { useHistory, useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { ScrollToTop } from '@app';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
/**
 * query job
 */

const GET_JOB = gql`
  query($id: String!) {
    jobs(id: $id, locale: "en-US") {
      name
      employeeType
      location
      description {
        json
      }
    }
  }
`;
/**
 * Renders JobPage
 */

const JobDetails: React.FC<JobDetailsProps> = ({}) => {
  const history = useHistory();
  const { id: jobId } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);
  const { data, loading, error } = useQuery(GET_JOB, {
    variables: { id: jobId }
  });

  if (loading) return <Spinner />;
  const { jobs: job } = data;
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.UNDERLINE]: text => (
        <div style={{ textDecoration: 'underline' }}>{text}</div>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={styles.list}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ listStyleType: 'decimal' }}>{children}</ol>
      ),
      [BLOCKS.QUOTE]: (node, children) => <blockquote>"{children}"</blockquote>
    }
  };
  const parsedDescription = documentToReactComponents(job?.description?.json);

  return (
    <React.Fragment>
      <ScrollToTop />
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div>Back</div>
      </div>

      <div className={styles.jobPage}>
        <section className={styles.sectionA}>
          <SectionTitle className={styles.title}>{job.name}</SectionTitle>
          <PreCaption className={styles.preCaption}>{job.location}</PreCaption>
          {/* <Paragraph className={styles.sectionADescription}>
            {job.description}
          </Paragraph> */}
          <RichTextDefault>{parsedDescription}</RichTextDefault>
        </section>
        <section className={styles.sectionB}>
          <H3 className={styles.titleOrange}>Apply for this job</H3>
          <Paragraph className={styles.description}>
            If you would like to take this module <br /> separately from a
            program, please contact us
          </Paragraph>
        </section>
        <JobApply job={job} />
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export { JobDetails };

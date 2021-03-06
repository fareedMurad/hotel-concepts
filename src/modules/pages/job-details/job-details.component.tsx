import * as React from 'react';
import * as styles from './job-details.scss';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Paragraph,
  H3,
  Footer,
  Spinner,
  SectionTitle,
  PreCaption,
  RichTextDefault,
  Icon
} from '@core/components';
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { JobApply } from './components/job-apply';
import { JobDetailsProps } from './job-details.props';
import { ScrollToTop } from '@app';
import { State } from '@app/redux/state';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { SEO } from '@core/components/seo/seo.component';
/**
 * query job
 */

const GET_JOB = gql`
  query($id: String!, $locale: String!) {
    jobs(id: $id, locale: $locale) {
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
  const { language } = useSelector((state: State) => state.localization);
  const { id: jobId } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(GET_JOB, {
    variables: { id: jobId, locale: language }
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
      <SEO
        title={`Apply for Job ${job?.name}`}
        thumbnail={''}
        url={window.location.href}
      />
      <div onClick={() => history.goBack()} className={styles.back}>
        <Icon name='arrows/arrow-back' className={styles.arrow} />
        <div>Back</div>
      </div>

      <div className={styles.jobPage}>
        <section className={styles.sectionA}>
          <SectionTitle className={styles.title}>{job?.name}</SectionTitle>
          <PreCaption className={styles.preCaption}>{job?.location}</PreCaption>
          {/* <Paragraph className={styles.sectionADescription}>
            {job.description}
          </Paragraph> */}
          <RichTextDefault>{parsedDescription}</RichTextDefault>
        </section>
        <section className={styles.sectionB}>
          <H3 className={styles.titleOrange}>Apply for this job</H3>
          <Paragraph className={styles.description}>
            If you would like to apply for this job,
            <br /> please fill the application form.
          </Paragraph>
        </section>
        <JobApply job={job} />
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export { JobDetails };

import * as React from 'react';
import { JobsListProps } from './jobs-list.props';
import * as styles from './jobs-list.scss';
import { ButtonFilter, Preloader, Footer, Spinner } from '@core/components';
import { useJobsListData } from './jobs-list.hook';
import { Vacancy } from './components';
import { Preloaders } from '@ui/models';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancies } from './store';
import { Header } from '@core/components/header';
import { State } from '@app/store/state';
import { ScrollToTop } from '@app';
import { gql, useLazyQuery, useQuery } from '@apollo/client';


const GET_JOBS_BY_CATEGORY_ID = gql`
query($id: String!){
  jobCategories(id: $id) {
    jobsCollection {
      items{
        sys{
          id
        }
        name
        jobTime
      }
    }
  }
}
`;

const GET_ALL_JOBS = gql`
{
  jobsCollection{
    total
    items{
      sys{
        id
      }
      name
      jobTime
    }
  }
}
`


/**
 * Renders JobsList
 */
const JobsList: React.FC<JobsListProps> = ({ }) => {
  const [isActive, setIsActive] = React.useState(null);
  const [jobName, setJobName] = React.useState('');
  const [categoryId, setCategoryId] = React.useState('')
  const [getJobs, { data, loading: jobsLoading }] = useLazyQuery(GET_JOBS_BY_CATEGORY_ID);
  const { data: allJobs, loading: loadingAllJobs, error } = useQuery(GET_ALL_JOBS)

  React.useEffect(() => {
    setIsActive('All');


  }, []);

  const { categories, loading } = useJobsListData();


  if (loading) return <Spinner />

  const filteredJobs = data?.jobCategories?.jobsCollection?.items
  const All = allJobs?.jobsCollection?.items




  return (
    <React.Fragment>
      <ScrollToTop />
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div className={styles.jobsList}>
        <h1 className={styles.title}>
          Want to create <br /> better hospitality impact?
        </h1>
        <p className={styles.description}>
          We are a fast-growing, London-based company that builds <br />{' '}
          hospitality online courses taught by the greatest masters in the{' '}
          <br /> world.
        </p>
        <div className={styles.filters}>
          {
            <ButtonFilter
              id='All'
              title='All'
              count={allJobs.jobsCollection.total}
              active={isActive == 'All'}
              onClick={() => {
                setIsActive('All')
              }}

            />}

          {categories.map(item => {
            const { category, sys: { id }, jobsCollection: { total }, } = item;
            const activeFilter = isActive === id;

            return (
              <ButtonFilter
                key={id}
                title={category}
                count={total}
                onClick={() => {
                  setIsActive(id);
                  setJobName(category);
                  setCategoryId(id)
                  getJobs({ variables: { id: id } })
                }}
                active={activeFilter}
              />
            );
          })}
        </div>

        <div className={styles.vacancies}>
          {jobsLoading && <Spinner />}
          {filteredJobs &&
            filteredJobs.map(vacancy => {
              const { name, jobTime, sys: { id } } = vacancy;
              return (
                <Vacancy
                  key={id}
                  title={jobTime}
                  description={name}
                  id={id}
                />
              );
            })}
          {All && isActive == 'All' &&
            All.map(vacancy => {
              const { name, jobTime, sys: { id } } = vacancy;
              return (
                <Vacancy
                  key={id}
                  title={jobTime}
                  description={name}
                  id={id}
                />
              );
            })}
        </div>

      </div>
      <Footer />
    </React.Fragment>
  );
};

export { JobsList };

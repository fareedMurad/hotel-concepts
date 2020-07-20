import * as React from 'react';
import { JobsListProps } from './jobs-list.props';
import * as styles from './jobs-list.scss';
import { ButtonFilter, Preloader, Footer } from '@core/components';
import { useJobsListData } from './jobs-list.hook';
import { Vacancy } from './components';
import { Preloaders } from '@ui/models';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancies } from './store';
import { Header } from '@core/components/header';
import { State } from '@app/store/state';

/**
 * Renders JobsList
 */
const JobsList: React.FC<JobsListProps> = ({}) => {
  const { filters } = useJobsListData();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(null);
  const [jobName, setJobName] = React.useState('');
  const { vacancies } = useSelector((state: State) => state.jobs);

  // const [specialization, setSpecialization] = React.useState('All');

  React.useEffect(() => {
    dispatch(getVacancies());
    setIsActive(1);
    setJobName('All');
  }, []);

  return (
    <React.Fragment>
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
          {filters.map(filter => {
            const { id, title, count } = filter;
            const activeFilter = isActive === filter.id;

            return (
              <ButtonFilter
                key={id}
                title={title}
                count={count}
                onClick={() => {
                  setIsActive(id);
                  setJobName(title);
                }}
                active={activeFilter}
              />
            );
          })}
        </div>
        <Preloader id={Preloaders.getVacancies}>
          <div className={styles.vacancies}>
            {jobName &&
              vacancies
                .filter(el => el.specialization === jobName)
                .map(vacancy => {
                  const { id, title, description } = vacancy;
                  return (
                    <Vacancy
                      key={id}
                      title={title}
                      description={description}
                      id={id}
                    />
                  );
                })}
            {(vacancies && !jobName) ||
              (jobName === 'All' &&
                vacancies.map(vacancy => {
                  const { id, title, description } = vacancy;
                  return (
                    <Vacancy
                      key={id}
                      title={title}
                      description={description}
                      id={id}
                    />
                  );
                }))}
          </div>
        </Preloader>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { JobsList };

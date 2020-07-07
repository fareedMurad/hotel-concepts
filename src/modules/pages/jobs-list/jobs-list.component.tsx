import * as React from 'react';
import { JobsListProps } from './jobs-list.props';
import * as styles from './jobs-list.scss';
import { ButtonFilter, Preloader } from '@core/components';
import { useJobsListData } from './jobs-list.hook';
import { Vacancy } from './components';
import { Preloaders } from '@ui/models';
import { useDispatch } from 'react-redux';
import { getVacancies } from './store';
import { Header } from '@core/components/header';

/**
 * Renders JobsList
 */
const JobsList: React.FC<JobsListProps> = ({}) => {
  const { filters, vacancies } = useJobsListData();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(null);

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
                }}
                active={activeFilter}
              />
            );
          })}
        </div>
        <button onClick={() => dispatch(getVacancies())}>Fetch</button>
        <Preloader id={Preloaders.getVacancies}>
          <div className={styles.vacancies}>
            {vacancies.map(vacancy => {
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
          </div>
        </Preloader>
      </div>
    </React.Fragment>
  );
};

export { JobsList };

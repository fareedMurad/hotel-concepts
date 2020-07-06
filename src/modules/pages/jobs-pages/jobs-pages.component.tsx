import * as React from 'react';
import { JobsPagesProps } from './jobs-pages.props';
import * as styles from './jobs-pages.scss';
import { Filter } from '@core/components';
import { useJobsPages } from './jobs-pages.hook';
import { title } from 'process';
import { Vacancy } from './components';

/**
 * Renders JobsPages
 */
const JobsPages: React.FC<JobsPagesProps> = ({}) => {
  const { filters, vacancies } = useJobsPages();
  const [isActive, setIsActive] = React.useState(null);
  console.log(filters);
  return (
    <div className={styles.jobsPages}>
      <h1 className={styles.title}>
        Want to create <br /> better hospitality impact?
      </h1>
      <p className={styles.description}>
        We are a fast-growing, London-based company that builds <br />{' '}
        hospitality online courses taught by the greatest masters in the <br />{' '}
        world.
      </p>
      <div className={styles.filters}>
        {filters.map(filter => {
          const { id, title, count } = filter;
          const activeFilter = isActive === filter.id;
          return (
            <Filter
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
      <div className={styles.vacancies}>
        {vacancies.map(vacancy => {
          return (
            <Vacancy
              key={vacancy.id}
              title={vacancy.title}
              description={vacancy.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export { JobsPages };

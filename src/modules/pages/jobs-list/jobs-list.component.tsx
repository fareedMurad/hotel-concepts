import * as React from 'react';
import { JobsListProps } from './jobs-list.props';
import * as styles from './jobs-list.scss';
import {
  ButtonFilter,
  Footer,
  Spinner,
  SectionTitle,
  Paragraph
} from '@core/components';
import { Vacancy } from './components';

import { ScrollToTop } from '@app';
import {
  useJobsFilterCategories,
  useAllJobsData,
  useFilteredJobsData
} from './hooks';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
import { useTranslation } from 'react-i18next';

/**
 * Renders JobsList
 */
const JobsList: React.FC<JobsListProps> = ({}) => {
  const { t } = useTranslation();
  const [currentFilter, setCurrentFilter] = React.useState('All');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);
  const {
    filterCategories,
    filterCategoriesLoading
  } = useJobsFilterCategories();
  const { allJobs, allJobsLoader } = useAllJobsData();
  const {
    filteredJobs,
    filteredJobsLoader,
    getFilteredJobs
  } = useFilteredJobsData();

  if (filterCategoriesLoading) return <Spinner />;
  if (allJobsLoader) return <Spinner />;

  const selectedCollection =
    currentFilter === 'All' ? allJobs?.items : filteredJobs;

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className={styles.header}></div>
      <div className={styles.jobsList}>
        <SectionTitle className={styles.title}>
          {t('jobs-list.title')}
        </SectionTitle>
        <Paragraph className={styles.description}>
          {t('jobs-list.description')}
        </Paragraph>
        <div className={styles.filters}>
          <ButtonFilter
            id='All'
            title={t('jobs-list.all')}
            count={allJobs.total}
            active={currentFilter == 'All'}
            onClick={() => {
              setCurrentFilter('All');
            }}
          />

          {filterCategories.map(item => {
            const {
              category,
              sys: { id },
              linkedFrom: {
                jobsCollection: { total }
              }
            } = item;
            const activeFilter = currentFilter === id;

            return (
              <ButtonFilter
                key={id}
                title={category}
                count={total}
                onClick={() => {
                  setCurrentFilter(id);
                  getFilteredJobs({ variables: { id: id } });
                }}
                active={activeFilter}
              />
            );
          })}
        </div>

        <div className={styles.vacancies}>
          {filteredJobsLoader && <Spinner />}
          {selectedCollection?.map((vacancy, index) => {
            const {
              name,
              employeeType,
              sys: { id }
            } = vacancy;
            return (
              <Vacancy
                key={index}
                title={employeeType}
                description={name}
                id={id}
              />
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export { JobsList };

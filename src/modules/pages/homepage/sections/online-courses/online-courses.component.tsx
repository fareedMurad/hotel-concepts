import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import { ButtonFilter, Button, SectionTitle } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { Spinner } from '@core/components/spinner';
import { navigate } from '@router/store';
import { useDispatch, useSelector } from 'react-redux';
import { useProgramsFiltersData, useProgramsData } from './hooks';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const [selectedCategory, setSelectedCategory] = React.useState({
    name: '',
    description: '',
    sys: {
      id: ''
    },
    linkedFrom: {
      onlineCourseCollection: {
        total: null
      }
    }
  });

  const {
    programsFiltersData,
    programsFiltersLoading
  } = useProgramsFiltersData(language);
  const { programsData, programsLoading } = useProgramsData(
    selectedCategory.name,
    language
  );

  React.useEffect(() => {
    if (!programsFiltersLoading) {
      setSelectedCategory(programsFiltersData[0]);
    }
  }, [programsFiltersData, programsFiltersLoading]);

  if (programsFiltersLoading) return <Spinner />;

  return (
    <React.Suspense fallback={<Spinner />}>
      <section className={styles.onlineCourses}>
        <div className={styles.title} id='online-courses'>
          <SectionTitle>{t('home.online-courses.title')}</SectionTitle>
          <div className={styles.subtitle}>
            {t('home.online-courses.sub-title')}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.filters}>
            {programsFiltersData.map(category => {
              const {
                name,
                linkedFrom: {
                  onlineCourseCollection: { total }
                }
              } = category;

              return (
                <ButtonFilter
                  key={name}
                  title={name}
                  count={total}
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  active={selectedCategory == category}
                  className={styles.filterButton}
                />
              );
            })}
          </div>

          <div className={styles.info}>{selectedCategory.description}</div>

          {selectedCategory.linkedFrom.onlineCourseCollection.total === 0 ? (
            <div>{t('home.online-courses.no-corses-caprion')}</div>
          ) : (
            <React.Fragment>
              {programsLoading ? (
                <Spinner />
              ) : (
                <div className={styles.coursesWrapper}>
                  <div className={styles.courses}>
                    {programsData.map((course, index) => (
                      <CourseItem key={index} course={course} />
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.footer}>
                <div className={styles.footerTitle}>
                  {t('home.online-courses.footer-title')}
                </div>
                <Button
                  onClick={() =>
                    dispatch(
                      navigate(`/programs-catalogue/${selectedCategory.sys.id}`)
                    )
                  }
                  className={styles.button}
                  children={t('home.online-courses.button-text')}
                  arrow='&#8594;'
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </section>
    </React.Suspense>
  );
};
export { OnlineCourses };

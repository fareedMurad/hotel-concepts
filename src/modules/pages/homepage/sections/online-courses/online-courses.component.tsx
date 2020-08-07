import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import { ButtonFilter, Button, SectionTitle } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { Spinner } from '@core/components/spinner';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';
import { useProgramsFiltersData, useProgramsData } from './hooks';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const dispatch = useDispatch();
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
  } = useProgramsFiltersData();
  const { programsData, programsLoading } = useProgramsData(
    selectedCategory.name
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
          <SectionTitle>Online courses for you</SectionTitle>
          <div className={styles.subtitle}>
            Contextualised and personalised hospitality learning at your
            fingertips.
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
            <div>
              We haven't added courses to this category yet. Please come back
              later!
            </div>
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
                  Can’t you find course for you in this category?
                </div>
                <Button
                  onClick={() =>
                    dispatch(
                      navigate(`/programs-catalogue/${selectedCategory.sys.id}`)
                    )
                  }
                  className={styles.button}
                  children='See more courses'
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

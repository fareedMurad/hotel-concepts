import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import { ButtonFilter, Button } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { useHistory } from 'react-router';
import { Spinner } from '@core/components/spinner';
import { useQuery } from '@apollo/client';
import { useOnlineCoursesData } from './online-courses.hook';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const {
    categories,
    loadingFilters,
    total,
    GET_COURSES_BY_FILTER
  } = useOnlineCoursesData();

  const dispatch = useDispatch();

  // we need init values to prevent errors
  const [currentCategory, setCurrentCategory] = React.useState({
    category: '',
    description: '',
    sys: {
      id: null
    },
    coursesCollection: {
      total: null
    }
  });

  const [coursesByFilter, setCoursesByFilter] = React.useState([]);
  // on first load we set default filter as first in array
  React.useEffect(() => {
    if (categories) {
      setCurrentCategory(categories[0]);
    }
  }, [categories]);

  const { data, loading, error } = useQuery(GET_COURSES_BY_FILTER, {
    variables: { courseType: currentCategory.category.toLowerCase() }
  });
  // we setting courses filtered by category
  React.useEffect(() => {
    if (!loading) {
      setCoursesByFilter(data.onlineCourseCollection.items);
    }
  }, [data]);

  if (loadingFilters) return <Spinner />;

  return (
    <section className={styles.onlineCourses}>
      <div className={styles.title}>
        <div>Online courses for you</div>
        <div>
          Contextualised and personalised hospitality learning at your
          fingertips.
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.filters}>
          {categories.map(category => {
            const { total } = category.coursesCollection;
            const { id } = category.sys;
            return (
              <ButtonFilter
                key={category.category}
                title={category.category}
                count={total}
                onClick={() => {
                  setCurrentCategory(category);
                }}
                active={currentCategory.category == category.category}
                className={styles.filterButton}
              />
            );
          })}
        </div>
        {currentCategory.coursesCollection.total === 0 ? (
          <div>No courses yet</div>
        ) : (
          <React.Fragment>
            <div className={styles.info}>{currentCategory.description}</div>
            <div className={styles.coursesWrapper}>
              <div className={styles.courses}>
                {coursesByFilter.map((course, index) => {
                  const {
                    slug,
                    name,
                    description,
                    duration: { months, sprints },
                    courseImage: { url },
                    price,
                    sys: { id }
                  } = course;
                  return (
                    <CourseItem
                      key={id}
                      id={id}
                      slug={slug}
                      name={name}
                      description={description}
                      weeks={months}
                      sprints={sprints}
                      price={price}
                      img={url}
                      catalogueId={currentCategory.sys.id}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.footerTitle}>
                Can’t you find course for you in this category?
              </div>
              <Button
                onClick={() =>
                  dispatch(
                    navigate(`/programs-catalogue/${currentCategory.sys.id}`)
                  )
                }
                className={styles.button}
              >
                <div>See more courses</div> <div>&#8594;</div>
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export { OnlineCourses };

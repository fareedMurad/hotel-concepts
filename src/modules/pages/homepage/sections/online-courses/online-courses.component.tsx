import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import { ButtonFilter, Button } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { Spinner } from '@core/components/spinner';
import {
  useOnlineCoursesData,
  useFilteredCourses
} from './online-courses.hook';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const { categories, loadingFilters } = useOnlineCoursesData();

  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = React.useState({
    name: '',
    description: '',
    sys: {
      id: ''
    },
    linkedFrom: {
      onlineCourseCollection: []
    }
  });
  const [coursesByFilter, setCoursesByFilter] = React.useState(null);
  const { courses, coursesLoading } = useFilteredCourses(currentCategory.name);

  React.useEffect(() => {
    if (!loadingFilters) {
      setCurrentCategory(categories[0]);
    }
  }, [categories, loadingFilters]);

  if (loadingFilters) return <Spinner />;

  const findDesription = category => {
    const searchedCategory = categories.filter(el => el.name !== category);
    return searchedCategory[0].description;
  };

  return (
    <section className={styles.onlineCourses}>
      <div className={styles.title} id='online-courses'>
        <div>Online courses for you</div>
        <div>
          Contextualised and personalised hospitality learning at your
          fingertips.
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.filters}>
          {categories.map(category => {
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
                  setCurrentCategory(category);
                }}
                active={currentCategory == category}
                className={styles.filterButton}
              />
            );
          })}
        </div>

        <div className={styles.info}>{currentCategory.description}</div>
        {coursesLoading ? (
          <Spinner />
        ) : (
          <div className={styles.coursesWrapper}>
            <div className={styles.courses}>
              {courses.map(course => {
                const {
                  name,
                  price,
                  weeks,
                  sprints,
                  slug,
                  description,
                  courseImage: { url },
                  sys: { id }
                } = course;
                return (
                  <CourseItem
                    key={id}
                    id={id}
                    slug={slug}
                    name={name}
                    description={description}
                    weeks={weeks}
                    sprints={sprints}
                    price={price}
                    img={url}
                    catalogueId={course.category.sys.id}
                  />
                );
              })}
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
                navigate(`/programs-catalogue/${currentCategory.sys.id}`)
              )
            }
            className={styles.button}
          >
            <div>See more courses</div> <div>&#8594;</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OnlineCourses };

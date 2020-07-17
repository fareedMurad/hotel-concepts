import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import { useOnlineCoursesData } from './online-courses.hook';
import { ButtonFilter, Button } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from './store';
import { gql, useQuery } from '@apollo/client';

/**
 * courses query
 */
const GET_ONLINE_COURSES = gql`
  {
    onlineCourseCollection {
      items {
        courseType
        slug
        name
        description
        price
        duration
        sys {
          id
        }
        courseImage {
          url
        }
      }
    }
  }
`;
/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const [currentCourseType, setCurrentCourseType] = React.useState(null);
  const { data, loading, error } = useQuery(GET_ONLINE_COURSES);
  React.useEffect(() => {
    if (loading) return;
    if (currentCourseType) return;
    const { items } = data.onlineCourseCollection;
    setCurrentCourseType(items[0].courseType);
  });

  const history = useHistory();

  if (loading) return <div>Loading...</div>;

  const { items: courses } = data.onlineCourseCollection;

  const handleClick = () => {
    const { slug } = courses;
    history.push(`/programs-catalogue/${slug}`);
  };

  const uniqueElements = Array.from(
    new Set(courses.map(course => course.courseType))
  );

  const currentCourses = courses.filter(
    course => course.courseType === currentCourseType
  );

  const getCoursesTypes = () => {
    return uniqueElements.map((course: string) => ({
      name: course,
      count: courses.filter(item => item.courseType === course).length
    }));
  };

  const coursesTypes = getCoursesTypes();

  const onFilterSelect = (name: string) => {
    setCurrentCourseType(name);
  };

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
          {coursesTypes.map(filter => (
            <ButtonFilter
              key={filter.name}
              title={filter.name}
              count={filter.count}
              onClick={() => {
                onFilterSelect(filter.name);
              }}
              active={currentCourseType == filter.name}
              className={styles.filterButton}
            />
          ))}
        </div>
        <div className={styles.info}>
          Focused programs are an opportunity for you to develop in-depth
          expertise in areas that are critical for you. Choose from many topics
          including hospitality digital marketing, revenue management, human
          resources and others.
        </div>
        <div className={styles.coursesWrapper}>
          <div className={styles.courses}>
            {currentCourses.map((data, index) => {
              const {
                slug,
                name,
                description,
                duration,
                price,
                courseImage
              } = data;
              const {
                sys: { id }
              } = data;
              return (
                <CourseItem
                  id={id}
                  slug={slug}
                  key={`${name}+${index}`}
                  name={name}
                  description={description}
                  weeks={duration.weeks}
                  sprints={duration.sprints}
                  price={price}
                  img={courseImage.url}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerTitle}>
            Can’t you find course for you in this category?
          </div>
          <Button onClick={handleClick} className={styles.button}>
            <div>See more courses</div> <div>&#8594;</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OnlineCourses };

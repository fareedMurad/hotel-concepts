import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import {
  useCoursesCategoriesData,
  useCoursesData
} from './online-courses.hook';
import { ButtonFilter, Button } from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { useHistory } from 'react-router';

import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { get } from 'object-path';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const { categories, loading, total } = useCoursesCategoriesData();
  const { allCourses } = useCoursesData();
  const [currentCourseCategorie, setCurrentCourseCategorie] = React.useState(
    null
  );
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    if (allCourses) {
      setCourses(allCourses);
    }
  });

  const [currentCategories, setCurrentCategory] = React.useState(null);
  const [id, setId] = React.useState(null);

  // React.useEffect(() => {
  //   if (categories) {
  //     setCurrentCategorie(categories);
  //   }
  // });

  // const { data, loading, error } = useQuery(GET_ONLINE_COURSES);
  // React.useEffect(() => {
  //   if (loading) return;
  //   if (currentCourseType) return;
  //   const { items } = data.onlineCourseCollection;
  //   setCurrentCourseType(items[0].courseType);
  // });

  const history = useHistory();

  // if (loading) return <div>Loading...</div>;

  // const { items: courses } = data.onlineCourseCollection;

  const handleClick = () => {
    history.push(`/programs-catalogue/${id}`);
  };

  if (loading) return <div>loading...</div>;

  // const uniqueElements = Array.from(
  //   new Set(courses.map(course => course.courseType))
  // );

  // const currentCourses = courses.filter(
  //   course => course.courseType === currentCourseType
  // );

  // const getCoursesTypes = () => {
  //   return uniqueElements.map((course: string) => ({
  //     name: course,
  //     count: courses.filter(item => item.courseType === course).length
  //   }));
  // };

  // const coursesTypes = getCoursesTypes();

  const onFilterSelect = () => {
    setCurrentCourseCategorie(name);
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
          <ButtonFilter
            count={total}
            title='All'
            onClick={() => {
              setCurrentCourseCategorie('All');
            }}
            active
          ></ButtonFilter>
          {categories.map(filter => {
            const { total } = filter.coursesCollection;
            const { id } = filter.sys;
            return (
              <ButtonFilter
                key={filter.category}
                title={filter.category}
                count={total}
                onClick={() => {
                  onFilterSelect();
                  setCurrentCategory(filter);
                  setId(filter.sys.id);
                }}
                active={currentCourseCategorie == filter.category}
                className={styles.filterButton}
              />
            );
          })}
        </div>
        <div className={styles.info}>
          Focused programs are an opportunity for you to develop in-depth
          expertise in areas that are critical for you. Choose from many topics
          including hospitality digital marketing, revenue management, human
          resources and others.
        </div>
        <div className={styles.coursesWrapper}>
          <div className={styles.courses}>
            {courses.map((course, index) => {
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
                  id={id}
                  slug={slug}
                  name={name}
                  description={description}
                  weeks={months}
                  sprints={sprints}
                  price={price}
                  img={url}
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

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

const GET_ONLINE_COURSES = gql`
  {
    onlineCourseCollection {
      items {
        name
      }
    }
  }
`;
/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = ({}) => {
  const { data: graphql, loading, error } = useQuery(GET_ONLINE_COURSES);
  
  console.log(graphql);

  const { data } = useOnlineCoursesData();
  const uniqueElements = Array.from(
    new Set(data.map(course => course.category))
  );
  const [currentCategory, setCurrentCutegory] = React.useState(
    uniqueElements[0]
  );
  const currentCourses = data.filter(
    course => course.category === currentCategory
  );
  const dispatch = useDispatch();

  const getCategories = () => {
    return uniqueElements.map(course => ({
      name: course,
      count: data.filter(item => item.category === course).length
    }));
  };

  React.useEffect(() => {
    dispatch(getCourses());
  });

  const categories = getCategories();

  const onFilterSelect = (name: string) => {
    setCurrentCutegory(name);
  };

  const history = useHistory();
  const handleClick = () =>
    history.push(`/programs-catalogue/focused-programs`);

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
          {categories.map(filter => (
            <ButtonFilter
              key={filter.name}
              title={filter.name}
              count={filter.count}
              onClick={() => {
                onFilterSelect(filter.name);
              }}
              active={currentCategory == filter.name}
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
                id,
                name,
                description,
                weeks,
                sprints,
                img,
                price
              } = data;
              return (
                <CourseItem
                  id={id}
                  key={`${name}+${index}`}
                  name={name}
                  description={description}
                  weeks={weeks}
                  sprints={sprints}
                  img={img}
                  price={price}
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

import * as React from 'react';
import { OnlineCoursesProps } from './online-courses.props';
import * as styles from './online-courses.scss';
import {
  ButtonFilter,
  Button,
  SectionTitle,
  Preloader
} from '@core/components';
import { CourseItem } from '@pages/homepage/components/course-item';
import { Spinner } from '@core/components/spinner';
import { navigate } from '@router/store';
import { useDispatch, useSelector } from 'react-redux';
import { useProgramsFiltersData, useProgramsData } from './hooks';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { getCategories } from '@app/redux/programs';
import { Preloaders } from '@ui/models';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = () => {
  const { categories, programs } = useSelector(
    (state: State) => state.programsData
  );
  console.log(programs);
  React.useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories(language));
    } else {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const [selectedCategory, setSelectedCategory] = React.useState({
    name: '',
    description: '',
    id: ''
  });

  // const {
  //   programsFiltersData,
  //   programsFiltersLoading
  // } = useProgramsFiltersData(language);
  // const { programsData, programsLoading } = useProgramsData(
  //   selectedCategory.name,
  //   language
  // );

  // React.useEffect(() => {
  //   if () {
  //     setSelectedCategory(categories[0]);
  //   }
  // }, [programsFiltersData, programsFiltersLoading]);

  // if (programsFiltersLoading) return <Spinner />;

  return (
    <section className={styles.onlineCourses}>
      <Preloader id={Preloaders.categories}>
        <div className={styles.title} id='online-courses'>
          <SectionTitle>{t('home.online-courses.title')}</SectionTitle>
          <div className={styles.subtitle}>
            {t('home.online-courses.sub-title')}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.filters}>
            {categories.map(item => {
              const { category, total } = item;

              return (
                <ButtonFilter
                  key={name}
                  title={category.name}
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
        </div>
      </Preloader>
      <Preloader id={Preloaders.programs}>
        {programs.map(program => (
          <CourseItem key={program.id} course={program} />
        ))}
      </Preloader>
      {/* 
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
</div>  */}
    </section>
  );
};
export { OnlineCourses };

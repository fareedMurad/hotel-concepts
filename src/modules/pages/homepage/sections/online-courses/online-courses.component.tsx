import * as React from 'react';
import * as styles from './online-courses.scss';
import {
  ButtonFilter,
  Button,
  SectionTitle,
  Preloader,
  Icon
} from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { CourseItem } from '@pages/homepage/components/course-item';
import { OnlineCoursesProps } from './online-courses.props';
import { navigate } from '@router/store';
import { useProgramsData } from './hooks';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { Preloaders } from '@ui/models';
import { Link } from 'react-router-dom';

/**
 * Renders OnlineCourses
 */
const OnlineCourses: React.FC<OnlineCoursesProps> = () => {
  const { categories, programs, selectedCategory } = useSelector(
    (state: State) => state.programsData
  );
  const { fetchPrograms } = useProgramsData();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <section className={styles.onlineCourses}>
      <div className={styles.title} id='online-courses'>
        <SectionTitle>{t('home.online-courses.title')}</SectionTitle>
        <div className={styles.subtitle}>
          {t('home.online-courses.sub-title')}
        </div>
      </div>
      <div className={styles.content}>
        <Preloader id={Preloaders.categories}>
          <div className={styles.filters}>
            {categories.map(item => {
              const { category, total } = item;

              return (
                <ButtonFilter
                  key={category.id}
                  title={category.name}
                  count={total}
                  onClick={() => {
                    fetchPrograms(item);
                  }}
                  active={selectedCategory.category.id === category.id}
                  className={styles.filterButton}
                />
              );
            })}
          </div>
          <div className={styles.info}>
            {selectedCategory && selectedCategory.category.description}
          </div>
        </Preloader>
        <Preloader id={Preloaders.programs}>
          <div className={styles.coursesWrapper}>
            <div className={styles.courses}>
              {programs.map(program => (
                <CourseItem key={program.id} course={program} />
              ))}
            </div>
          </div>
          <Link to='/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h'>
            <Button className={styles.buttonExplore}>
              <div>{t('home.online-courses.button-text')}</div>
              <Icon name='arrows/arrow-right-b' />
            </Button>
          </Link>
        </Preloader>
      </div>
    </section>
  );
};
export { OnlineCourses };

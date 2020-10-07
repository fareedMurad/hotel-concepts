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
import { navigate } from '@router/store';
import { useDispatch, useSelector } from 'react-redux';
import { useProgramsData } from './hooks';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';

import { Preloaders } from '@ui/models';

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
        </Preloader>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerTitle}>
          {t('home.online-courses.footer-title')}
        </div>
        <Button
          onClick={() =>
            dispatch(
              navigate(`/programs-catalogue/${selectedCategory.category.id}`)
            )
          }
          className={styles.button}
          children={t('home.online-courses.button-text')}
          arrow
          width={224}
        />
      </div>
    </section>
  );
};
export { OnlineCourses };

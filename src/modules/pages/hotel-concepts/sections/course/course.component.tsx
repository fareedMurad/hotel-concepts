import * as React from 'react';
import * as styles from './course.scss';
import { Button, Preloader } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { AboutCoursesProps } from './course.props';
import { AboutCoursesData } from './course.hook';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { Preloaders } from '@ui/models';
import { Link } from 'react-router-dom';

/**
 * Renders AboutCourses
 */
const AboutCourses: React.FC<AboutCoursesProps> = () => {
  const { categories, programs, selectedCategory } = useSelector(
    (state: State) => state.programsData
  );
  //   const { fetchPrograms } = useProgramsData();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data } = AboutCoursesData();

  return (
    <section className={styles.aboutcourses}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.about-courses.title')}
        </h1>
      </div>
      <div className={styles.divsubtitle}>
        <div></div>
        <div className={styles.subtitle}>
          {t('hotel-concepts.about-courses.sub-title')}
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <Preloader id={Preloaders.programs}>
            <div className={styles.paragraph}>
              <span className={styles.parabold}>
                {t('hotel-concepts.about-courses.paras.para1.bold-discription')}
              </span>
              &nbsp;
              {t('hotel-concepts.about-courses.paras.para1.discription')}
            </div>
            <div className={styles.paragraph}>
              <span className={styles.parabold}>
                {t('hotel-concepts.about-courses.paras.para1.bold-discription')}
              </span>
              &nbsp;
              {t('hotel-concepts.about-courses.paras.para2.discription')}
            </div>
            <div className={styles.paragraph}>
              <span className={styles.parabold}>
                {t('hotel-concepts.about-courses.paras.para3.bold-discription')}
              </span>
              &nbsp;
              {t('hotel-concepts.about-courses.paras.para1.discription')}
            </div>
            <div className={styles.paragraph}>
              {t('hotel-concepts.about-courses.paras.para4.discription')}
              <span className={styles.parabold}>
                {t('hotel-concepts.about-courses.paras.para1.bold-discription')}
              </span>
              {t('hotel-concepts.about-courses.paras.para4.discription1')}
            </div>
            <div className={styles.paragraph}>
              <span className={styles.parabold}>
                {t('hotel-concepts.about-courses.paras.para5.bold-discription')}
              </span>
            </div>
            <Link to='/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h'>
              <Button className={styles.buttonPeek}>
                <div>{t('hotel-concepts.about-courses.button-text')}</div>
                <img
                  className={styles.buttonImg}
                  src={require(`img/peek.png`)}
                  alt='mvp'
                />
              </Button>
            </Link>
          </Preloader>
        </div>
        <div>
          <div className={styles.courseItem}>
            <div className={styles.card}>
              <div className={styles.descriptionBlock}>
                {data.map(items => (
                  <>
                    <div className={styles.carddetails}>
                      <div className={styles.label}>{items.label}</div>
                      <div className={styles.value}>{items.value}</div>
                    </div>
                    <hr className={styles.hr} />
                  </>
                ))}
                <div className={styles.bottom}>
                  <Button
                    // #non-clickable
                    // onClick={handleClick(id, slug)}
                    className={styles.button}
                    children='ENROLL'
                    width='100%'
                  />
                </div>
                <div className={styles.descriptionbox}>
                  <div className={styles.count}>
                    {t('hotel-concepts.about-courses.count.count1.title')}
                  </div>
                  <div className={styles.countdiscription}>
                    <span className={styles.parabold}>
                      {t(
                        'hotel-concepts.about-courses.count.count1.bold-discription'
                      )}
                    </span>
                    &nbsp;
                    {t('hotel-concepts.about-courses.count.count1.discription')}
                  </div>
                </div>
                <div className={styles.descriptionbox}>
                  <div className={styles.count}>
                    {t('hotel-concepts.about-courses.count.count2.title')}
                  </div>
                  <div className={styles.countdiscription}>
                    {t('hotel-concepts.about-courses.count.count2.discription')}
                    &nbsp;
                    <span className={styles.parabold}>
                      {t(
                        'hotel-concepts.about-courses.count.count2.bold-discription'
                      )}
                    </span>
                  </div>
                </div>
                <div className={styles.descriptionbox}>
                  <div className={styles.count}>
                    {t('hotel-concepts.about-courses.count.count3.title')}
                  </div>
                  <div className={styles.countdiscription}>
                    <span className={styles.parabold}>
                      {t(
                        'hotel-concepts.about-courses.count.count3.bold-discription'
                      )}
                    </span>
                    &nbsp;
                    {t('hotel-concepts.about-courses.count.count3.discription')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { AboutCourses };

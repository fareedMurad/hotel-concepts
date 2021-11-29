import * as React from 'react';
import * as styles from './courseauthors.scss';
import { Button, Icon } from '@core/components';
// import { FaqItem } from '@pages/homepage/components/faq-item';
// import { Accordin } from '@pages/hotel-concepts/components/syllabus';
import { useTranslation } from 'react-i18next';
import { CourseAuthrosData } from './courseauthors.hook';
import { AboutKelsiModal } from '../../hotelconceptsmodals/aboutkelsimodal';
// import { AboutMagdalenaModal } from '../../modals/aboutmagdalenamodal';
import { AboutMapsMvpModal } from '../../hotelconceptsmodals/mapsmodalexperience';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { closeModal, showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { useDispatch } from 'react-redux';

/**
 * Renders WhoEnroll
 */
const CourseAuthors = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, instructor } = CourseAuthrosData();
  const { active: activeModal } = useSelector((state: State) => state.ui.modal);
  return (
    <section className={styles.courseauthor}>
      <div className={styles.title}>
        <div className={styles.innerbox}>
          <h1 className={styles.sectiontitle}>
            {t('hotel-concepts.course-author.title')}
          </h1>
        </div>
        <div className={styles.innerBox2}>
          <h1 className={styles.sectionSubTitle}>
            {t('hotel-concepts.course-author.section-sub-title')}
          </h1>
        </div>
        <div className={styles.innerBox3}>
          <h1 className={styles.subtitle}>
            {t('hotel-concepts.course-author.sub-title')}
          </h1>
          <img className={styles.imgsrc} src={`img/mvp.png`} alt='syllabus' />
        </div>
      </div>
      <div className={styles.innerBox4}>
        <span className={styles.discription}>
          {t('hotel-concepts.course-author.discription')}
        </span>{' '}
        <span className={styles.subDiscription}>
          {t('hotel-concepts.course-author.bold-discription')}
        </span>
      </div>
      <div className={styles.innerBox5}>
        {data.map((item, id) => (
          <img
            key={id}
            className={styles.imgsrc}
            src={item.imgSrc}
            alt='syllabus'
          />
        ))}
      </div>
      <div className={styles.innerBox6}>
        <p className={styles.paragraph1}>
          {t('hotel-concepts.course-author.paragraph1')}
        </p>{' '}
        <p className={styles.paragraph2}>
          {t('hotel-concepts.course-author.paragraph2')}
        </p>
      </div>
      <div className={styles.innerBox7}>
        <img className={styles.imgSrc} src={`img/Kandima.png`} alt='syllabus' />
        <Button
          className={styles.control}
          onClick={() => dispatch(showModal(Modals.mapsModal))}
        >
          <div className={styles.boxBtnBox}>
            <h4>Have a look at MAp’s notable projects</h4>
            <Icon className={styles.btnIcon} name='modalbtnarrow' />
          </div>
        </Button>
        <AboutMapsMvpModal />
      </div>
      <div className={styles.title}>
        <div className={styles.instructionTitle}>
          <h1 className={styles.instructionSectionTitle}>
            {t('hotel-concepts.instructor-details.title')}
          </h1>
        </div>
      </div>
      {instructor.map((item, id) => (
        <div key={id} className={styles.instructionCard}>
          <img
            className={styles.instructionImgSrc}
            src={item.imgSrc}
            alt='syllabus'
          />
          <div className={styles.instructionDetails}>
            <h1 className={styles.instructionTitle}>{item.name}</h1>
            <h1 className={styles.instructionJob}>{item.job}</h1>
            <p className={styles.instructionDiscription}>{item.experience}</p>
            <Button
              className={styles.instructionBtnText}
              onClick={() => dispatch(showModal(Modals.aboutKelsiModal))}
            >
              <div className={styles.boxBtnBox}>
                <h4>{item.btnText}</h4>
                <Icon className={styles.btnIcon1} name='authorsleftarrow' />
              </div>
            </Button>
            <AboutKelsiModal />
            {/* <AboutMagdalenaModal /> */}
          </div>
        </div>
      ))}
    </section>
  );
};
export { CourseAuthors };

import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './magdalenamodal.scss';
import { CourseAuthrosModalData } from './magdalenamodal.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders MagdalenaModal
 */
const MagdalenaModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { instructor, instructorDetails } = CourseAuthrosModalData();
  return (
    <div className={styles.kelsimodal}>
      {instructor.map((item, id) => (
        <div key={id} className={styles.leftBox}>
          <img
            className={styles.modalImg}
            src={item.imgSrc}
            alt='MagdalenaRungaldier'
          />
          <div className={styles.aboutBoxWrapper}>
            <h4 className={styles.aboutBoxName}>{item.name}</h4>
            <h6 className={styles.aboutBoxJob}>{item.job} </h6>
            <h6 className={styles.aboutBoxLocation}>{item.location}</h6>
          </div>
          <div className={styles.aboutBoxImage}>
            <img
              className={styles.linkedinImg}
              src={item.linkedin}
              alt='linkedin'
            />
          </div>
        </div>
      ))}
      <div className={styles.detailsBoxWrapper}>
        <ul className={styles.detailsBoxUl}>
          {instructorDetails.map((item, id) => (
            <li className={styles.detailsBoxLi} key={id}>
              {item.details}
            </li>
          ))}
          <p className={styles.detailsBoxHash}>
            {t('hotel-concepts.instructor-details.instructor.info1.hash-tag')}
          </p>
        </ul>
      </div>
    </div>
  );
};

export { MagdalenaModal };

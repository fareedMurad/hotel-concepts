import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './clinkhostals.scss';
import { MapsModalData } from './clinkhostals.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders ClinkHostalsModal
 */
const ClinkHostalsModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { about, stars, achievments, awards } = MapsModalData();
  return (
    <>
      <div className={styles.mapsmodalHeading}>
        <h2 className={styles.mapsmodalHeadingH2}>
          {t('hotel-concepts.about-maps-modals-data.maps-modal1.title')}
        </h2>
        <p className={styles.mapsmodalHeadingP}>
          {t('hotel-concepts.about-maps-modals-data.maps-modal1.discription')}
        </p>
      </div>
      <div className={styles.mapsmodal}>
        <img src={`img/ClinkHostels.png  `} className={styles.modelImg} />
        <div className={styles.hotelDescription}>
          <h1 className={styles.hotelDescriptionHeading}>
            {t(
              'hotel-concepts.about-maps-modals-data.maps-modal1.clink-hostals.title'
            )}
          </h1>
          <p className={styles.hotelDescriptionPara}>
            {t(
              'hotel-concepts.about-maps-modals-data.maps-modal1.clink-hostals.discription'
            )}
          </p>
          <p className={styles.hotelDescriptionHashTag}>
            {t(
              'hotel-concepts.about-maps-modals-data.maps-modal1.clink-hostals.hash-tag'
            )}
          </p>
          {/* <div className={styles.aboutHotel}> */}
          <div className={styles.aboutHotelDetails}>
            {about.map((item, id) => (
              <p key={id}>
                <span className={styles.aboutHotelDetailsLabal}>
                  {item.labal}
                </span>{' '}
                <span className={styles.aboutHotelDetailsValue}>
                  {item.value}
                </span>
              </p>
            ))}

            <div className={styles.rateingStars}>
              {stars.map((item, id) => (
                <img key={id} src={item.imgSrc} alt='' />
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.aboutHotel}>
        <div className={styles.aboutHotelDesign}>
          <p className={styles.aboutHotelDetailsLabal}>
            {t(
              'hotel-concepts.about-maps-modals-data.maps-modal1.clink-hostals.about.achievments.title'
            )}
          </p>
          {achievments.map((item, id) => (
            <p key={id} className={styles.aboutHotelDetailsValue}>
              {item.achieve}
            </p>
          ))}
        </div>
        <div className={styles.hotelDescriptionList}>
          <ul className={styles.hotelDescriptionListUl}>
            <h2>
              {t(
                'hotel-concepts.about-maps-modals-data.maps-modal1.clink-hostals.about.awards.title'
              )}
            </h2>
            {awards.map((item, id) => (
              <li key={id}>
                <span className={styles.aboutHotelDetailsUlLabal}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export { ClinkHostalsModal };

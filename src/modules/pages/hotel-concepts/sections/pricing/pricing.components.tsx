import * as React from 'react';
import * as styles from './pricing.scss';
import { useTranslation } from 'react-i18next';
import { PricingData } from './pricing.hook';
import { Button, Icon } from '@core/components';
/**
 * Renders Pricing
 */

const Pricing = () => {
  const { t } = useTranslation();
  const { data } = PricingData();

  return (
    <section className={styles.pricing}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.pricing.title')}
        </h1>
      </div>
      <div className={styles.pricingWrapper}>
        <div className={styles.offerCourseCard}>
          <div className={styles.cost}>
            <h1 className={styles.costTitle}>
              {t('hotel-concepts.pricing.offers.item1.title')}
            </h1>
            <h2 className={styles.costPrice}>
              {t('hotel-concepts.pricing.offers.item1.price')}
            </h2>
          </div>
          <div className={styles.offer}>
            <h1 className={styles.costTitle}>
              {t('hotel-concepts.pricing.offers.item2.title')}
            </h1>
            <h2 className={styles.costPrice}>
              {t('hotel-concepts.pricing.offers.item2.price')}
            </h2>
            <p className={styles.costDiscription}>
              {t('hotel-concepts.pricing.offers.item2.description')}{' '}
              <span className={styles.costDiscriptionBold}>
                {t('hotel-concepts.pricing.offers.item2.date')}
              </span>
            </p>
          </div>
          <div className={styles.services}>
            <h4 className={styles.serviceTitle}>
              {t('hotel-concepts.pricing.services.title')}
            </h4>
            <ul className={styles.serviceUlList}>
              <li className={styles.serviceList}>
                {t('hotel-concepts.pricing.services.list1')}
              </li>
              <li className={styles.serviceList}>
                {t('hotel-concepts.pricing.services.list2')}
              </li>
              <li className={styles.serviceList}>
                {t('hotel-concepts.pricing.services.list3')}
              </li>
            </ul>
          </div>
          <div className={styles.payments}>
            <h4 className={styles.serviceTitle}>
              {t('hotel-concepts.pricing.payments.title')}
            </h4>
            <p className={styles.paymentsDiscription}>
              {t('hotel-concepts.pricing.payments.discription')}
            </p>
          </div>
        </div>
        <div className={styles.enrollTodayForm}>
          <h1 className={styles.enrollTitle}>Enroll today</h1>
          <div className={styles.onlinePayCheckbox}>
            <div className={styles.onlineInputBox}>
              <input className={styles.accept} type='checkbox' />
              <label className={styles.onlinePayLabel}>
                Pay online <b>with discount</b>
              </label>
            </div>
            <div className={styles.paymentMethodImg}>
              {data.map((item, id) => (
                <img key={id} src={item.imgSrc} alt='payment-methods' />
              ))}
            </div>
          </div>
          <div className={styles.onlinePayCheckbox}>
            <div className={styles.onlineInputBox}>
              <input className={styles.accept} type='checkbox' />
              <label className={styles.onlinePayLabel}>Request Invoice</label>
            </div>
          </div>
          <div className={styles.onlinePayDetails}>
            <form>
              <h6 className={styles.formTitle}>Please fill in your details</h6>
              <div className={styles.boxInputWrapper}>
                <input type='text' placeholder='Name Surname' />
                <div className={styles.boxInputBox}>
                  <input type='text' placeholder='Phone' />
                  <input
                    type='email'
                    placeholder='Email'
                    pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
                  />
                </div>
              </div>
            </form>
          </div>
          <div className={styles.privacyBox}>
            <div className={styles.onlineInputBox}>
              <input className={styles.accept} type='checkbox' />
              <label className={styles.onlinePayLabel}>
                I Agree to Privacy Policy
              </label>
            </div>
          </div>
          <div className={styles.submitIt}>
            <Button
              className={styles.submitBtn}
              type='submit'
              // onClick={() => handleSubmit()}
            >
              Enroll
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Pricing };

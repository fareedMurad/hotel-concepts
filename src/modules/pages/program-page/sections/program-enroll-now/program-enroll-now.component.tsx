import * as React from 'react';
import { ProgramEnrollNowProps } from './program-enroll-now.props';
import * as styles from './program-enroll-now.scss';
import { Button, Spinner } from '@core/components';
import classNames from 'classnames';
import { useProgramEnrollData } from './program-enroll.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { addProductToCart } from '@app/redux/cart/actions';

/**
 * Renders ProgramEnrollNow
 */

const ProgramEnrollNow: React.FC<ProgramEnrollNowProps> = ({
  data,
  programId,
  inCart
}) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const dispatch = useDispatch();

  if (!data) return null;
  // put popular in the middle of array;
  const copy = [...data?.enrollNow];
  for (const [index, object] of copy.entries()) {
    if (object.isMostPopular) {
      [copy[index], copy[1]] = [copy[1], copy[index]];
      break;
    }
  }

  return (
    <section id='enroll' className={styles.programEnrollNow}>
      <div className={styles.title}>
        {t('program-page.program-enroll-now.title')}
      </div>
      <div className={styles.container}>
        {copy.map((item, index) => {
          const { id, isMostPopular, name, description, price, features } =
            item || {};
          const isEnterprise = name == 'Enterprise';

          return (
            <div
              className={classNames(styles.enrollItem, {
                [styles.popular]: isMostPopular
              })}
              key={index}
            >
              <div className={styles.topSide}>
                <div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.description}>{description}</div>
                </div>
                <div className={styles.priceBlock}>
                  <div className={styles.price}>
                    <div className={styles.dollar}>$</div>
                    {price}
                  </div>
                  {inCart ? (
                    <Button className={styles.button} disabled>
                      In cart
                    </Button>
                  ) : (
                    <Button
                      className={styles.button}
                      children={
                        isEnterprise
                          ? t(
                              'program-page.program-enroll-now.button-text-contact'
                            )
                          : t('program-page.program-enroll-now.button-text')
                      }
                      arrow
                      width='100%'
                      onClick={() =>
                        isEnterprise
                          ? dispatch(showModal(Modals.contactUs))
                          : dispatch(
                              addProductToCart({ path: programId, quantity: 1 })
                            )
                      }
                    />
                  )}
                </div>
              </div>
              <div className={styles.hr} />
              <div className={styles.features}>
                <div className={styles.featureTitle}>
                  {t('program-page.program-enroll-now.sub-title')}
                </div>
                {features.map((item, index) => (
                  <div className={styles.featureItem} key={index}>
                    <div>+</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { ProgramEnrollNow };

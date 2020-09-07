import * as React from 'react';
import { ProgramEnrollNowProps } from './program-enroll-now.props';
import * as styles from './program-enroll-now.scss';
import { Button, Spinner } from '@core/components';
import classNames from 'classnames';
import { useProgramEnrollData } from './program-enroll.hook';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders ProgramEnrollNow
 */

const ProgramEnrollNow: React.FC<ProgramEnrollNowProps> = ({ programId }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const { programEnrollData, programEnrollLoading } = useProgramEnrollData(
    programId,
    language
  );

  if (programEnrollLoading) return <Spinner />;

  // put popular in the middle of array;
  const copy = [...programEnrollData?.items];
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
        {copy.map((item, index) => (
          <div
            className={classNames(styles.enrollItem, {
              [styles.popular]: item.isMostPopular
            })}
            key={index}
          >
            <div className={styles.topSide}>
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
              <div className={styles.priceBlock}>
                <div className={styles.price}>
                  <div className={styles.dollar}>$</div>
                  {item.price}
                </div>
                <Button
                  className={styles.button}
                  children={t('program-page.program-enroll-now.button-text')}
                  arrow='&#8594;'
                  width='100%'
                />
              </div>
            </div>
            <div className={styles.hr} />
            <div className={styles.features}>
              <div className={styles.featureTitle}>
                {t('program-page.program-enroll-now.sub-title')}
              </div>
              {item.features.map((item, index) => (
                <div className={styles.featureItem} key={index}>
                  <div>+</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProgramEnrollNow };

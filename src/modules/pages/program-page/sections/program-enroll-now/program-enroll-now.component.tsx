import * as React from 'react';
import { ProgramEnrollNowProps } from './program-enroll-now.props';
import * as styles from './program-enroll-now.scss';
import { Button } from '@core/components';
import { map } from 'puppeteer/DeviceDescriptors';
import classNames from 'classnames';

/**
 * Renders ProgramEnrollNow
 */
const ProgramEnrollNow: React.FC<ProgramEnrollNowProps> = ({ enrollInfo }) => {
  return (
    <section id="enroll" className={styles.programEnrollNow}>
      <div className={styles.title}>Enroll Now</div>
      <div className={styles.container}>
        {enrollInfo.map((item, index) => (
          <div
            className={classNames(styles.enrollItem, {[styles.popular]: item.isMostPopular})}
            key={index}
          >
            <div className={styles.topSide}>
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
              <div className={styles.priceBlock}>
                {item.price &&
                  <div className={styles.price}>
                    <div className={styles.dollar}>$</div>
                    {item.price}
                  </div>
                }
                <Button className={styles.button}>
                  <div>Enroll Now</div><div>&#8594;</div>
                </Button>
              </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.features}>
            <div className={styles.featureTitle}>Features</div>
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
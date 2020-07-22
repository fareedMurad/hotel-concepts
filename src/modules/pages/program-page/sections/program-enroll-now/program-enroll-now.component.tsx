import * as React from 'react';
import { ProgramEnrollNowProps } from './program-enroll-now.props';
import * as styles from './program-enroll-now.scss';
import { Button, Spinner } from '@core/components';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';

/**
 * querry payment proposals
 */

const GET_PAYMENT_PROPOSALS = gql`
  {
    paymentProposalsCollection {
      items {
        name
        description
        price
        features
        isEnrollReady
        isMostPopular
        id
      }
    }
  }
`;
/**
 * Renders ProgramEnrollNow
 */

const ProgramEnrollNow: React.FC<ProgramEnrollNowProps> = () => {
  const { data, loading, error } = useQuery(GET_PAYMENT_PROPOSALS);

  if (loading) return <Spinner />;

  const { items } = data.paymentProposalsCollection;

  const itemsCopy = [...items];
  itemsCopy.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });


  return (
    <section id='enroll' className={styles.programEnrollNow}>
      <div className={styles.title}>Enroll Now</div>
      <div className={styles.container}>
        {itemsCopy.map((item, index) => (
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
                {item.price && (
                  <div className={styles.price}>
                    <div className={styles.dollar}>$</div>
                    {item.price}
                  </div>
                )}
                <Button className={styles.button}>
                  <div>Enroll Now</div>
                  <div>&#8594;</div>
                </Button>
              </div>
            </div>
            <div className={styles.hr} />
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

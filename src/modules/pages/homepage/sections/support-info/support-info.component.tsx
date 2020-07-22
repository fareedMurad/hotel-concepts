import * as React from 'react';
import { SupportInfoProps } from './support-info.props';
import * as styles from './support-info.scss';
import { useSupportInfoData } from './support-info.hook';

/**
 * Renders SupportInfo
 */
const SupportInfo: React.FC<SupportInfoProps> = ({}) => {
  const { data } = useSupportInfoData();

  return (
    <section className={styles.supportInfo}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <div>
            We support <br /> the future generation of hospitality industry
          </div>
          <div />
          <div>
            While there is much talk of machines replacing people in the
            workplace, at Cordie we believe that the centrality of technology
            makes human development all the more crucial.
          </div>
        </div>
      </div>
      <div className={styles.info}>
        {data.map((info, index) => (
          <div className={styles.infoItem} key={index}>
            {info}
          </div>
        ))}
      </div>
    </section>
  );
};

export { SupportInfo };

import * as React from 'react';
import { WhyCordieProps } from './why-cordie.props';
import * as styles from './why-cordie.scss';
import { Icon, H1, H2, Paragraph } from '@core/components';

/**
 * Renders WhyCordie
 */

/**
 * Renders WhyCordie
 */
const WhyCordie: React.FC<WhyCordieProps> = ({}) => {
  return (
    <div className={styles.whyCordie}>
      <Icon name='abstract-1' />
      <H1>Why Kordie?</H1>

      <div className={styles.wrapper}>
        <div className={styles.block}>
          <H2>Your Global Partner</H2>
          <Paragraph>
            With an unrivalled capability to deliver learning globally, we equip
            people, teams and organisations with hospitality industry to
            succeed, change and grow.
          </Paragraph>
        </div>
        <div className={styles.block}>
          <H2>Powerful Network</H2>
          <Paragraph>
            We define success by results achieved. To get there, we partner with
            you to fully understand your needs and the outcomes you want to
            achieve. The process is highly collaborative, informed by your
            current business environment and your corporate culture.
          </Paragraph>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <H2>The Kordie Approach </H2>
          <Paragraph>
            We provide access global network of hospitality business leaders. We
            are a closeknit hospitality learning community whose mission is to
            support and accelerate you beyond your journey.
          </Paragraph>
        </div>
        <div className={styles.block}>
          <H2>World-class Faculty</H2>
          <Paragraph>
            You can benefit from a wide spectrum of world-class hospitality
            coaching experts with diverse backgrounds, talents and expertise.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { WhyCordie };

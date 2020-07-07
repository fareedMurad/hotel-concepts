import * as React from 'react';
import { OurApproachProps } from './our-approach.props';
import * as styles from './our-approach.scss';
import { H2, Paragraph } from '@core/components';

/**
 * Renders OurApproach
 */
const OurApproach: React.FC<OurApproachProps> = ({}) => {
  return (
    <div className={styles.ourApproach}>
      <div
        style={{
          backgroundImage: `url(${require('img/our-approach-img.png')})`
        }}
        className={styles.image}
      >
        <div className={styles.content}>
          <H2 className={styles.title}>Our approach</H2>
          <Paragraph className={styles.body}>
            We care deeply about the learning experience of each and every
            participant, and the impact they bring back to your organisation.
            Learning is just the beginning. We give your people the tools they
            need to make a difference – for you and for them.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { OurApproach };

import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { ForWhomProps } from './for-whom.props';
import * as styles from './for-whom.scss';

/**
 * Renders ForWhom
 */
const ForWhom: React.FC<ForWhomProps> = ({ data }) => {
  const { forWhom, forWhomListOfPositions } = data || {};

  return (
    <div className={styles.forWhom}>
      <Title>For whom</Title>
      <div className={styles.description}>{forWhom}</div>
      <div className={styles.content}>
        {forWhomListOfPositions?.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardIndicator} />
            <div className={styles.cardCaption}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ForWhom };

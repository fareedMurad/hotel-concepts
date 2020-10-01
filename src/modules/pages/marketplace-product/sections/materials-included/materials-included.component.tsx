import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { MaterialsIncludedProps } from './materials-included.props';
import * as styles from './materials-included.scss';

/**
 * Renders MaterialsIncluded
 */
const MaterialsIncluded: React.FC<MaterialsIncludedProps> = ({ data }) => {
  const { materialsIncluded } = data || {};

  return (
    <div className={styles.materialsIncluded}>
      <Title>Materials included</Title>
      <div className={styles.materials}>
        {materialsIncluded?.map((material, index) => (
          <div className={styles.material} key={index}>
            <div className={styles.materialIndicator} />
            <div className={styles.materialCaption}>{material}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MaterialsIncluded };

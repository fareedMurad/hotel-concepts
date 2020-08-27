import * as React from 'react';
import { MaterialsIncludedProps } from './materials-included.props';
import * as styles from './materials-included.scss';
import { Icon, SectionTitle } from '@core/components';

/**
 * Renders MaterialsIncluded
 */
const MaterialsIncluded: React.FC<MaterialsIncludedProps> = ({
  productMaterials
}) => {
  return (
    <div className={styles.materialsIncluded}>
      <div className={styles.materialsIncludedContent}>
        <Icon name='abstract-1' />
        <SectionTitle className={styles.materialsIncludedContentTitle}>
          Materials included
        </SectionTitle>
        {productMaterials.map(el => {
          return (
            <div key={el} className={styles.materialsIncludedContentItem}>
              <Icon name='dot' />
              <div>{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { MaterialsIncluded };

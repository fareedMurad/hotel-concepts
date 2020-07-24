import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';
import { Spinner } from '@core/components';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({
  additionalMaterials,
  loading
}) => {
  if (loading) return <Spinner />;
  return (
    <section className={styles.programMaterials}>
      <div className={styles.title}>Additional materials</div>
      {additionalMaterials.map((item, index) => (
        <div className={styles.item} key={index}>
          {item}
        </div>
      ))}
    </section>
  );
};

export { ProgramMaterials };

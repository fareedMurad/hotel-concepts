import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({additionalMaterials}) => {
  console.log(additionalMaterials)
  return (
    <section className={styles.programMaterials}>
      <div className={styles.title}>
        Additional materials
      </div>
      {additionalMaterials.map((item, index) => (
        <div className={styles.item} key={index}>{item}</div>
      ))}
    </section>
  );
};

export { ProgramMaterials };

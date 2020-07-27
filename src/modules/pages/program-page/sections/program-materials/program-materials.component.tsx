import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';
import { Spinner } from '@core/components';
import { useProgramMaterialsData } from './program-materials.hook';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({ programId }) => {
  const {
    additionalMaterialsData,
    additionalMaterialsLoading
  } = useProgramMaterialsData(programId);

  if (additionalMaterialsLoading) return <Spinner />;
  return (
    <section className={styles.programMaterials}>
      <div className={styles.title}>Additional materials</div>
      {additionalMaterialsData.map((item, index) => (
        <div className={styles.item} key={index}>
          {item}
        </div>
      ))}
    </section>
  );
};

export { ProgramMaterials };

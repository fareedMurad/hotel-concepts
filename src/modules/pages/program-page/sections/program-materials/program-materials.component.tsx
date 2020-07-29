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
  console.log(additionalMaterialsData);

  if (additionalMaterialsLoading || additionalMaterialsData === undefined)
    return <Spinner />;
  return (
    <section className={styles.programMaterials}>
      <div className={styles.title}>Additional materials</div>
      {additionalMaterialsData.map((item, index) => (
        <div
          className={styles.item}
          key={index}
          onClick={() => {
            window.open(item.url, '_blank');
          }}
        >
          {item.description}
        </div>
      ))}
    </section>
  );
};

export { ProgramMaterials };

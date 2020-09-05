import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';
import { Spinner } from '@core/components';
import { useProgramMaterialsData } from './program-materials.hook';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({ programId }) => {
  const { language } = useSelector((state: State) => state.localization);
  const {
    additionalMaterialsData,
    additionalMaterialsLoading
  } = useProgramMaterialsData(programId, language);

  if (additionalMaterialsLoading) return <Spinner />;
  return (
    <section className={styles.programMaterials}>
      {!additionalMaterialsData ? (
        <div>
          We haven't added additional materials yet. Please come back later!
        </div>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </section>
  );
};

export { ProgramMaterials };

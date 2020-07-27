import * as React from 'react';
import { ProgramModulesProps } from './program-modules.props';
import * as styles from './program-modules.scss';
import { ProgramModuleItem } from '@pages/program-page/components/program-module-item';
import { useProgramModulesData } from './program-modules.hook';
import { Spinner } from '@core/components';

/**
 * Renders ProgramModules
 */
const ProgramModules: React.FC<ProgramModulesProps> = ({ programId }) => {
  const { modulesData, modulesLoading } = useProgramModulesData(programId);

  if (modulesLoading) return <Spinner />;
  
  const {
    items,
    total: { countOfModules }
  } = modulesData;

  return (
    <section id='facility' className={styles.programModules}>
      <div className={styles.title}>
        <div>Modules</div>
        <div>
          {`The program consist of ${countOfModules} weekly courses.
          Each course can be taken separately on your request.`}
        </div>
        {items.map((item, index) => {
          const {
            description,
            name,
            weeks,
            hours,
            modulePdf: { url }
          } = item;
          return (
            <ProgramModuleItem
              key={`${index}+${item.name}`}
              index={index}
              name={name}
              description={description}
              pdf={url}
              weeks={weeks}
              hours={hours}
            />
          );
        })}
      </div>
    </section>
  );
};

export { ProgramModules };

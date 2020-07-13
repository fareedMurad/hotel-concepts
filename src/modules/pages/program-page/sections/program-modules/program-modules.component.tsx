import * as React from 'react';
import { ProgramModulesProps } from './program-modules.props';
import * as styles from './program-modules.scss';
import { ProgramModuleItem } from '@pages/program-page/components/program-module-item';

/**
 * Renders ProgramModules
 */
const ProgramModules: React.FC<ProgramModulesProps> = ({ modules }) => {
  return (
    <section className={styles.programModules}>
      <div className={styles.title}>
        <div>Modules</div>
        <div>
          The program consist of 12 weekly courses. <br/>
          Each course can be taken separately on your request.
        </div>
        {modules.map((item, index) => (
          <ProgramModuleItem
            key={`${index}+${item.name}`}
            index={index}
            name={item.name}
            description={item.description}
            pdf={item.pdf}
            weeks={item.weeks}
            hrhWeek={item.hrhWeek}
          />
        ))}
      </div>
    </section>
  );
};

export { ProgramModules };

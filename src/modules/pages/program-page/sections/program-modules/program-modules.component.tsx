import * as React from 'react';
import { ProgramModulesProps } from './program-modules.props';
import * as styles from './program-modules.scss';
import { ProgramModuleItem } from '@pages/program-page/components/program-module-item';

/**
 * Renders ProgramModules
 */
const ProgramModules: React.FC<ProgramModulesProps> = ({ modules, amountOfWeeklyModules }) => {
  console.log(modules[0].description)
  return (
    <section id="facility" className={styles.programModules}>
      <div className={styles.title}>
        <div>Modules</div>
        <div>
          {`The program consist of ${amountOfWeeklyModules} weekly courses.
          Each course can be taken separately on your request.`}
        </div>
        {modules.map((item, index) => {
          return <ProgramModuleItem
            key={`${index}+${item.name}`}
            index={index}
            name={item.name}
            description={item.description}
            pdf={item.pdf}
            duration={item.duration}
          />
})}
      </div>
    </section>
  );
};

export { ProgramModules };

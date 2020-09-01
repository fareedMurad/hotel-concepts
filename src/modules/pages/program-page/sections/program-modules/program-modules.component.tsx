import * as React from 'react';
import { ProgramModulesProps } from './program-modules.props';
import * as styles from './program-modules.scss';
import { ProgramModuleItem } from '@pages/program-page/components/program-module-item';
import { useProgramModulesData } from './program-modules.hook';
import { Spinner } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders ProgramModules
 */
const ProgramModules: React.FC<ProgramModulesProps> = ({ programId }) => {
  const { modulesData, modulesLoading } = useProgramModulesData(programId);
  const { t } = useTranslation();

  if (modulesLoading) return <Spinner />;
  console.log(modulesData);
  const { items, total } = modulesData;
  debugger;
  return (
    <section id='facility' className={styles.programModules}>
      <div className={styles.title}>
        <div>{t('program-page.modules.title')}</div>
        <div>
          {`The program consist of ${total} weekly courses.
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

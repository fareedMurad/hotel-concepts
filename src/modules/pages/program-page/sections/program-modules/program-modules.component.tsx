import * as React from 'react';
import { ProgramModulesProps } from './program-modules.props';
import * as styles from './program-modules.scss';
import { ProgramModuleItem } from '@pages/program-page/components/program-module-item';
import { useProgramModulesData } from './program-modules.hook';
import { Spinner } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

/**
 * Renders ProgramModules
 */
const ProgramModules: React.FC<ProgramModulesProps> = ({ data }) => {
  const { language } = useSelector((state: State) => state.localization);
  // const { modulesData, modulesLoading } = useProgramModulesData(
  //   programId,
  //   language
  // );
  const { t } = useTranslation();

  // const { items, total } = modulesData;
  return (
    <section id='facility' className={styles.programModules}>
      <div className={styles.title}>
        <div>{t('program-page.modules.title')}</div>
        <div>
          {`The program consist of ${data?.modules.length} weekly courses.
          Each course can be taken separately on your request.`}
        </div>
        {data?.modules.map((item, index) => {
          const {
            description,
            name,
            weeks,
            hours,
            modulePdf: {
              file: { url }
            }
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

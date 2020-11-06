import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';
import { Spinner } from '@core/components';
import { useProgramMaterialsData } from './program-materials.hook';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.programMaterials}>
      {!data?.additionalMaterials ? (
        <div>{t('program-page.additional-materials.no-materials')}</div>
      ) : (
        <React.Fragment>
          <div className={styles.title}>
            {' '}
            {t('program-page.additional-materials.title')}
          </div>

          {data?.additionalMaterials?.materials?.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.title}
            </div>
          ))}
        </React.Fragment>
      )}
    </section>
  );
};

export { ProgramMaterials };

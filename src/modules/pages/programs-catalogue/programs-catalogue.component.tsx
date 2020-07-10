import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './catalogue-header';

/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  return (
    <div className={styles.programsCatalogue}>
      <CatalogueHeader />
    </div>
  );
};

export { ProgramsCatalogue };

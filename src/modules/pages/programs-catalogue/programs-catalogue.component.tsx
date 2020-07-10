import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';

/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  return (
    <div className={styles.programsCatalogue}>
      <CatalogueHeader />
      <div className={styles.title}>
        <div>Find the right course for you</div>
        <div>Choose from our growing range of online courses to meet your professional goals.</div>
      </div>
      <CatalogueFilters />
      <ProgramsContactUs />
    </div>
  );
};

export { ProgramsCatalogue };

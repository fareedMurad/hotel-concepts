import * as React from 'react';
import { CatalogueHeaderProps } from './catalogue-header.props';
import * as styles from './catalogue-header.scss';

/**
 * Renders CatalogueHeader
 */
const CatalogueHeader: React.FC<CatalogueHeaderProps> = ({}) => {
  return (
    <section className={styles.catalogueHeader}>
      <div className={styles.title}>
        <div>Focused Hospitality Programs</div>
        <div>
          Get in-depth knowledge and focus on developing or building specific capabilities.
          Whether you are looking to kick-start or accelerate your career, we offer a masters
          course to suit your transition needs, at every stage of your career.
        </div>
      </div>
    </section>
  );
};

export { CatalogueHeader };

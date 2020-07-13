import * as React from 'react';
import { CatalogueHeaderProps } from './catalogue-header.props';
import * as styles from './catalogue-header.scss';
import { ScrollButton } from '@core/components/scroll-button';

/**
 * Renders CatalogueHeader
 */
const CatalogueHeader: React.FC<CatalogueHeaderProps> = ({ title, description }) => {
  return (
    <section className={styles.catalogueHeader}>
      <div className={styles.title}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <ScrollButton text="Scroll" className={styles.scrollButton} />
    </section>
  );
};

export { CatalogueHeader };

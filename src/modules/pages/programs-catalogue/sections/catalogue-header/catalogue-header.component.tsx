import * as React from 'react';
import { CatalogueHeaderProps } from './catalogue-header.props';
import * as styles from './catalogue-header.scss';
import { ScrollButton } from '@core/components/scroll-button';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const GET_CATEGORY_INFO = gql`
  {
    asset(id: "4ErSQZq6E96W3ZfjU9LKN7") {
      url
    }
  }
`;
/**
 * Renders CatalogueHeader
 */
const CatalogueHeader: React.FC<CatalogueHeaderProps> = ({
  title,
  description
}) => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_CATEGORY_INFO);
  const catalogueHeroImage = data?.asset?.url;

  return (
    <section
      className={styles.catalogueHeader}
      style={{ backgroundImage: `url(${catalogueHeroImage})` }}
    >
      <div className={styles.title}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <ScrollButton
        text={t('programs-catalogue.scroll')}
        className={styles.scrollButton}
      />
    </section>
  );
};

export { CatalogueHeader };

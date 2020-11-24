import * as React from 'react';
import * as styles from './catalogue-header.scss';
import { gql, useQuery } from '@apollo/client';
import { CatalogueHeaderProps } from './catalogue-header.props';
import { ScrollButton } from '@core/components/scroll-button';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import { __Directive } from 'graphql';

const GET_CATEGORY_INFO = gql`
  query($id: String!) {
    courseCategory(id: $id) {
      coverImage {
        url
        sys {
          id
        }
      }
      reducedImage {
        sys {
          id
        }
      }
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
  const { id: categoryId } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_CATEGORY_INFO, {
    variables: { id: categoryId }
  });
  const catalogueHeroImage = data?.courseCategory?.coverImage?.url;

  return (
    <section className={styles.catalogueHeader}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${catalogueHeroImage})`
        }}
      />
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

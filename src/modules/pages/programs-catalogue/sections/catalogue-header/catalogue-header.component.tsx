import * as React from 'react';
import * as styles from './catalogue-header.scss';
import { gql, useQuery } from '@apollo/client';
import { CatalogueHeaderProps } from './catalogue-header.props';
import { ScrollButton } from '@core/components/scroll-button';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import { __Directive } from 'graphql';
import { useMediaPoints } from '@core/shared';

const GET_CATEGORY_INFO = gql`
  query($id: String!) {
    courseCategory(id: $id) {
      coverImage {
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

const GET_MOBILE_BG = gql`
  query($id: String!) {
    courseCategory(id: $id) {
      coverMobileImage {
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
  const { mobile } = useMediaPoints();
  const { data, loading, error } = useQuery(
    mobile ? GET_MOBILE_BG : GET_CATEGORY_INFO,
    {
      variables: { id: categoryId }
    }
  );

  const titlePosition = {
    'Essential Soft Skills': 'flex-end'
  }[title];

  console.log(titlePosition);

  const mobileImage = mobile && data?.courseCategory?.coverMobileImage.sys.id;
  const reducedImage = data?.courseCategory?.reducedImage?.sys?.id;
  const fullImage = data?.courseCategory?.coverImage?.sys?.id;

  return (
    <section className={styles.catalogueHeader}>
      <LazyBackground
        className={styles.background}
        reducedImageId={reducedImage}
        fullImageId={fullImage || mobileImage}
      />
      <div
        className={styles.title}
        style={{ alignSelf: (mobile && titlePosition) || 'center' }}
      >
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

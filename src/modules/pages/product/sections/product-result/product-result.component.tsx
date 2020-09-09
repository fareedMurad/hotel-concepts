import * as React from 'react';
import { ProductResultProps } from './product-result.props';
import * as styles from './product-result.scss';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { Spinner } from '@core/components';

/**
 * Query program result
 */
const GET_PRODUCT_RESULTS = gql`
  query($id: String!, $locale: String!) {
    product(id: $id, locale: $locale) {
      results
    }
  }
`;
/**
 * Renders ProductResult
 */
const ProductResult: React.FC<ProductResultProps> = ({ productId }) => {
  const { language } = useSelector((state: State) => state.localization);
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_PRODUCT_RESULTS, {
    variables: { id: productId, locale: language }
  });
  if (loading) return <Spinner />;

  const results = data?.product?.results;
  return (
    <section id='results' className={styles.productResults}>
      <div className={styles.title}>{t('program-page.results')}</div>
      <div className={styles.hr} />
      {results.map(item => (
        <div key={item}>
          <div className={styles.container}>
            <div className={styles.icon} />
            <div className={styles.result}>{item}</div>
          </div>
          <div className={styles.hr} />
        </div>
      ))}
    </section>
  );
};

export { ProductResult };

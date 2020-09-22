import * as React from 'react';
import { ProductDescriptionProps } from './product-description.props';
import * as styles from './product-description.scss';
import { H2, Paragraph } from '@core/components';
import Moment from 'react-moment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

/**
 * Renders ProductDescription
 */
const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  const {
    publishDate,
    listOfSkills,
    details: { json: details },
    sys: { id },
    pagesCount
  } = product;
  const parsedRichText = documentToReactComponents(details);
  return (
    <div className={styles.productDescription}>
      <div className={styles.productDescriptionBlock}>
        <H2>Product Description</H2>
        <div className={styles.productDescriptionAdditional}>
          <h1>Publication Date:</h1>
          <div>
            <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
          </div>
        </div>
        <div className={styles.productDescriptionBlockText}>
          <p>{parsedRichText}</p>
        </div>
      </div>
      <div className={styles.skillCovered}>
        <div className={styles.skills}>
          <div>Skills covered</div>
          {listOfSkills.map((item, index) => (
            <div className={styles.item} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductDescription };

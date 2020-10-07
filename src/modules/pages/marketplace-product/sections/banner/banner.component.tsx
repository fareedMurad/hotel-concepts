import { Button } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import moment from 'moment';
import * as React from 'react';
import { BannerProps } from './banner.props';
import * as styles from './banner.scss';

/**
 * Renders Banner
 */
const Banner: React.FC<BannerProps> = ({ data }) => {
  const {
    id,
    img,
    name,
    previewDescription,
    authors,
    languages,
    publishDate,
    price
  } = data;

  return (
    <div className={styles.banner}>
      <div className={styles.box}>
        <img className={styles.image} src={img} />
        <div className={styles.container}>
          <Title>{name}</Title>
          <div className={styles.description}>{previewDescription}</div>
          <div className={styles.authors}>
            by
            {authors?.map((author, index) => (
              <a className={styles.author} key={index}>
                {author.name} {author.surname}
              </a>
            ))}
          </div>
          <div className={styles.meta}>
            <div className={styles.languages}>
              <span className={styles.languagesBold}>Language</span>
              <span className={styles.languagesList}>{languages}</span>
            </div>
            <div className={styles.published}>
              <span className={styles.publishedBold}>Published</span>
              <span className={styles.publishedDate}>
                {moment(publishDate).format('YYYY')}
              </span>
            </div>
          </div>
          <div className={styles.price}>${price}</div>
          <Button className={styles.checkout} arrow>
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Banner };

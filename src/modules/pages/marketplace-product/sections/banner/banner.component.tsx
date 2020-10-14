import { Button } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import moment from 'moment';
import * as React from 'react';
import { BannerProps } from './banner.props';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import * as styles from './banner.scss';
import { useDispatch } from 'react-redux';
import { cart } from '@app/redux/cart';

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
  const dispatch = useDispatch();
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
              <a
                className={styles.author}
                key={index}
                onClick={() => scrollTo('authors')}
              >
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
          <Button
            className={styles.checkout}
            arrow
            onClick={() => {
              dispatch(cart.add({ path: id, quantity: 1 }));
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Banner };

import { Button, Icon } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { PreviewProps } from './preview.props';
import * as styles from './preview.scss';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { checkout } from '@app/redux/checkout';

/**
 * Renders Preview
 */
const Preview: React.FC<PreviewProps> = ({ data }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    id,
    img,
    name,
    previewDescription,
    authors,
    languages,
    publishDate,
    highlightsText,
    price,
    availableFormats
  } = data;

  return (
    <div className={styles.preview}>
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div className={styles.backCaption}>{t('product.back')}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          <img className={styles.image} src={img} />
          <Button className={styles.show} theme='secondary'>
            Show content
          </Button>
          <div className={styles.showcaseInfo}>
            <div className={styles.share}>
              <div className={styles.shareCaption}>Share</div>
              <Icon className={styles.shareIcon} name='share' />
              {/* <div className={styles.share}> </div> */}
            </div>
            <div className={styles.formats}>
              {availableFormats?.map((format, index) => (
                <div className={styles.format} key={index}>
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.caption}>{name}</div>
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
          <div className={styles.highlights}>
            {highlightsText?.map((highlight, index) => (
              <div className={styles.highlight} key={index}>
                {highlight}
              </div>
            ))}
          </div>
          <div className={styles.price}>${price}</div>
          <Button
            className={styles.checkout}
            arrow
            onClick={() => {
              dispatch(checkout([{ path: id, quantity: 1 }]));
            }}
          >
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Preview };

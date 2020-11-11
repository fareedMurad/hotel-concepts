import * as React from 'react';
import { DescriptionProps } from './description.props';
import * as styles from './description.scss';
import moment from 'moment';
import { Title } from '@pages/marketplace-product/components';

/**
 * Renders Description
 */
const Description: React.FC<DescriptionProps> = ({ data }) => {
  const { id, publishDate, listOfSkills, pagesCount, details } = data || {};

  return (
    <div className={styles.description}>
      <div className={styles.container}>
        <Title>Product Description</Title>
        <div className={styles.publish}>
          <div className={styles.publishCaption}>
            Publication Date:{' '}
            <span className={styles.publishDate}>
              {' '}
              {moment(publishDate).format(' MMMM DD, YYYY')}
            </span>
          </div>
        </div>
        <div className={styles.text}>
          {/**temporary */}
          {details?.content[0].content[0].value}
        </div>
        {/* <div className={styles.product}>
          <div className={styles.productCaption}>Product:</div>
          <div className={styles.productName}>{id}</div>
        </div> */}
        {/* <div className={styles.page}>
          <div className={styles.pageCaption}>Page:</div>
          <div className={styles.pageCount}>{pagesCount}</div>
        </div> */}
      </div>
      <div className={styles.skills}>
        <div className={styles.skillsCaption}>Skills covered</div>
        <div className={styles.skillsList}>
          {listOfSkills?.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <div className={styles.skillIndicator} />
              <div className={styles.skillCaption}>{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Description };

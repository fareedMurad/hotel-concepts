import * as React from 'react';
import { DescriptionProps } from './description.props';
import * as styles from './description.scss';
import moment from 'moment';
import { Title } from '@pages/marketplace-product/components';

/**
 * Renders Description
 */
const Description: React.FC<DescriptionProps> = ({ data }) => {
  const { id, publishDate, listOfSkills, pagesCount } = data || {};

  return (
    <div className={styles.description}>
      <div className={styles.container}>
        <Title>About</Title>
        <div className={styles.publication}>
          <div className={styles.publicationCaption}>Publication Date:</div>
          <div className={styles.publicationDate}>
            {moment(publishDate).format('MMMM DD, YYYY')}
          </div>
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          eligendi itaque nesciunt asperiores delectus cum laboriosam et odio
          corrupti blanditiis! Aspernatur quaerat sunt nulla dolores autem?
          Blanditiis, ducimus doloribus? Asperiores?
        </div>
        <div className={styles.product}>
          <div className={styles.productCaption}>Product:</div>
          <div className={styles.productName}>{id}</div>
        </div>
        <div className={styles.page}>
          <div className={styles.pageCaption}>Page:</div>
          <div className={styles.pageCount}>{pagesCount}</div>
        </div>
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

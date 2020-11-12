import classNames from 'classnames';
import * as React from 'react';
import * as styles from './reading.scss';

/**
 * Formats
 */
const formats = [
  { caption: 'MOBI and FB2', description: '- for Kindle and readers' },
  { caption: 'EPUB', description: '- most popular format for ebooks' },
  {
    caption: 'PDF',
    description: '- for those who prefers “as a printed book”'
  }
];

/**
 * Renders Reading
 */
const Reading: React.FC = () => (
  <div className={styles.reading}>
    <div className={styles.head}>
      <div className={styles.title}>Read where it is convenient</div>
      <div className={styles.description}>
        In our library, users read wherever it is convenient for them - on a
        tablet, phone, or in a reading room. For this, we prepare books in all
        popular formats.
      </div>
      <div className={styles.formats}>
        {formats.map(({ caption, description }, index) => (
          <div className={styles.format} key={index}>
            <div className={styles.formatCaption}>{caption}</div>
            <div className={styles.formatDescription}>{description}</div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.preview}>
      <img
        className={styles.mockup}
        src={require('img/marketplace/mockup.png')}
        alt='mockup'
      />
      {/* <img
        className={classNames(styles.previewImage, styles.previewImageEbook)}
        src={require('img/marketplace/preview1.png')}
        alt='preview1'
      />
      <img
        className={classNames(styles.previewImage, styles.previewImagePhone)}
        src={require('img/marketplace/preview2.png')}
        alt='preview2'
      />
      <img
        className={classNames(styles.previewImage, styles.previewImageTablet)}
        src={require('img/marketplace/preview3.png')}
        alt='preview3'
      />
      <img
        className={classNames(styles.previewImage, styles.previewImageLaptop)}
        src={require('img/marketplace/preview4.png')}
        alt='preview4'
      /> */}
    </div>
  </div>
);

export { Reading };

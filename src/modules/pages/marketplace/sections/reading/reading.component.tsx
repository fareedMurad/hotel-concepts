import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
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
 * Query mockup image
 */
const GET_MOCKUP = gql`
  {
    mockupsCollection(where: { title: "Marketplace mockup" }) {
      items {
        mockup {
          title
          url
        }
      }
    }
  }
`;

/**
 * Renders Reading
 */
const Reading: React.FC = () => {
  const { data } = useQuery(GET_MOCKUP);
  const image = data?.mockupsCollection?.items[0].mockup;

  return (
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
          src={`${image?.url}?q=90&w=1400`}
          alt={image?.title}
        />
      </div>
    </div>
  );
};

export { Reading };

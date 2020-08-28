import * as React from 'react';
import { AuthorsProps } from './authors.props';
import * as styles from './authors.scss';
import { Icon, H2, H3, Button } from '@core/components';
import { useMediaPoints } from '@core/shared';

/**
 * Renders Authors
 */
const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  const { mobile } = useMediaPoints();
  const [index, setIndex] = React.useState(0);
  return (
    <div className={styles.authors}>
      <div className={styles.aboutAuthor}>
       
        <div className={styles.aboutAuthorCaption}>
          <Icon name='abstract-1' />
          <H2>Authors</H2>
        </div>
        {
          mobile && <div className={styles.authorImageMobile}>
        <img
          src={authors[0].picture}
          alt={authors[0].name}
          width='300px'
          height='300px'
        />
      </div>
        }

        <div className={styles.aboutAuthorPosition}>
          {authors[index].position}
        </div>
        <div className={styles.aboutAuthorName}>
          <H3>{authors[index].name}</H3>
        </div>
        <div className={styles.aboutAuthorDescription}>
          {authors[index].description}
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonsArrow}>←</button>
          <button className={styles.buttonsArrow}>→</button>
          <Button arrow='→'>See All Contributors</Button>
        </div>
      </div>
      {
        !mobile && <div className={styles.authorImage}>
        <img
          src={authors[0].picture}
          alt={authors[0].name}
          width='541px'
          height='584px'
        />
      </div>
      }
     
    </div>
  );
};

export { Authors };

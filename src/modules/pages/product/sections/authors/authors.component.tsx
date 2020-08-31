import * as React from 'react';
import { AuthorsProps } from './authors.props';
import * as styles from './authors.scss';
import { Icon, H2, H3, Button } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useAnimatedTransition } from './animation-config/animation';
import { animated, useTransition, config } from 'react-spring';

/**
 * Renders Authors
 */
const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  const { mobile } = useMediaPoints();
  const [index, setIndex] = React.useState(0);
  const { dispatch } = useDispatch();

  const transitions = useTransition(authors[index], item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  React.useEffect(() => {}, [index]);
  return (
    <div className={styles.authors}>
      <div className={styles.aboutAuthor}>
        <div className={styles.aboutAuthorCaption}>
          <Icon name='abstract-1' />
          <H2>Authors</H2>
        </div>
        {mobile &&
          transitions.map(({ item, key, props }) => {
            return (
              <div style={props} className={styles.authorImageMobile}>
                <animated.img
                  key={key}
                  style={props}
                  src={item.picture}
                  alt={item.name}
                  width='300px'
                  height='300px'
                />
              </div>
            );
          })}

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
          <button
            className={styles.buttonsArrow}
            // onClick={() => setIndex(index - 1)}
          >
            ←
          </button>
          <button
            className={styles.buttonsArrow}
            // onClick={() => setIndex(index + 1)}
          >
            →
          </button>
          <Button arrow='→' onClick={() => dispatch(navigate('/contributors'))}>
            See All Contributors
          </Button>
        </div>
      </div>
      {!mobile && (
        <div className={styles.authorImage}>
          <img
            src={authors[index].picture}
            alt={authors[index].name}
            width='541px'
            height='584px'
          />
        </div>
      )}
    </div>
  );
};

export { Authors };
import * as React from 'react';
import { AuthorsProps } from './authors.props';
import * as styles from './authors.scss';
import { Icon, H2, H3, Button } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useAnimatedTransition } from './animation-config/animation';
import { animated, useTransition, config } from 'react-spring';
import { useTranslation } from 'react-i18next';

/**
 * Renders Authors
 */
const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  const { t } = useTranslation();
  const { mobile } = useMediaPoints();
  const [index, setIndex] = React.useState(0);
  const { dispatch } = useDispatch();

  const transitions = useTransition(authors[index], item => item.sys.id, {
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
          <H2>{t('product.authors.title')}</H2>
        </div>
        {mobile &&
          transitions.map(({ item, key, props }) => {
            return (
              <div key={key} style={props} className={styles.authorImageMobile}>
                <animated.img
                  style={props}
                  src={item.mentorPicture.url}
                  alt={item.name}
                  width='300px'
                  height='300px'
                />
              </div>
            );
          })}
        <div className={styles.aboutAuthorWrapper}>
          <div className={styles.aboutAuthorPosition}>
            {authors[index].position}
          </div>
          <div className={styles.aboutAuthorName}>
            <H3>{authors[index].name}</H3>
          </div>
          <div className={styles.aboutAuthorDescription}>
            {authors[index].experience}
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
            <Button
              arrow='→'
              onClick={() => dispatch(navigate('/contributors'))}
            >
              {t('product.authors.button-text')}
            </Button>
          </div>
        </div>
      </div>
      {!mobile && (
        <div className={styles.authorImage}>
          <img
            src={authors[index].mentorPicture.url}
            alt={authors[index].name}
            style={{ objectFit: 'cover' }}
            width='500px'
          />
        </div>
      )}
    </div>
  );
};

export { Authors };

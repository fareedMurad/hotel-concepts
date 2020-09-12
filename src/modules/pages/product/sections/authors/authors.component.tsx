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
  const dispatch = useDispatch();

  const transitions = useTransition(authors[index], item => item.sys.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' }
  });

  React.useEffect(() => {}, [index]);
  return (
    <div className={styles.authors} id='authors'>
      <div className={styles.aboutAuthor}>
        <div className={styles.aboutAuthorCaption}>
          <Icon name='abstract-1' />
          <H2>{t('product.authors.title')}</H2>
        </div>
        {mobile && (
          <div className={styles.authorImageMobile}>
            {transitions.map(({ item, props, key }) => (
              <animated.img
                key={key}
                src={item.mentorPicture.url}
                alt={item.name}
                style={{ ...props, objectFit: 'cover' }}
                width='300px'
              />
            ))}
          </div>
        )}

        <div className={styles.aboutAuthorWrapper}>
          {transitions.map(({ item, props, key }) => {
            return (
              <animated.div key={key} style={props}>
                <div className={styles.aboutAuthorPosition}>
                  {item.position}
                </div>
                <div className={styles.aboutAuthorName}>
                  <H3>
                    {item.name} {item.surname}
                  </H3>
                </div>
                <div className={styles.aboutAuthorDescription}>
                  {item.shortDescription && item.shortDescription}
                </div>
              </animated.div>
            );
          })}
          <div className={styles.buttons}>
            {authors.length !== 1 && (
              <>
                {' '}
                <button
                  className={styles.buttonsArrow}
                  onClick={() =>
                    index === 0
                      ? setIndex(authors.length - 1)
                      : setIndex(index - 1)
                  }
                >
                  ←
                </button>
                <button
                  className={styles.buttonsArrow}
                  onClick={() =>
                    index === authors.length - 1
                      ? setIndex(0)
                      : setIndex(index + 1)
                  }
                >
                  →
                </button>
              </>
            )}
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
          {transitions.map(({ item, props, key }) => (
            <animated.img
              key={key}
              src={item.mentorPicture.url}
              alt={item.name}
              style={{ ...props, objectFit: 'cover' }}
              width='550px'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Authors };

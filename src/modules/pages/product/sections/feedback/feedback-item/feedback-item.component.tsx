import * as React from 'react';
import { FeedbackItemProps } from './feedback-item.props';
import * as styles from './feedback-item.scss';

/**
 * Renders FeedbackItem
 */
const FeedbackItem: React.FC<FeedbackItemProps> = () => {
  return (
    <section className={styles.feedbackItem}>
      <div
        className={styles.text}
      >{`"It was important to us that our courses would look beautiful and that the software would be easy to use. It was important to us that our courses would look beautiful and that the software would be easy to use."`}</div>
      <div className={styles.container}>
        <img
          src='https://images.ctfassets.net/qgx3dmmccd7u/5ZG02yv7wPum2DU6lowW6Q/6f07cb39f338eb9298f53b436d385303/author-1.png'
          alt='Author'
          className={styles.img}
        />
        <div className={styles.info}>
          <div className={styles.name}>Donna Rice</div>
          <div className={styles.from}>
            {'from ' + `"The Leila Hotel & Spa"`}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeedbackItem };

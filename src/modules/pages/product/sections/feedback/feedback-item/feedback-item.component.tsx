import * as React from 'react';
import { FeedbackItemProps } from './feedback-item.props';
import * as styles from './feedback-item.scss';

/**
 * Renders FeedbackItem
 */
const FeedbackItem: React.FC<FeedbackItemProps> = ({ comment }) => {
  const {
    name,
    companyName,
    photo: { url },
    text
  } = comment;
  return (
    <section className={styles.feedbackItem}>
      <div className={styles.text}>{text}</div>{' '}
      <div className={styles.container}>
        <img src={url} alt='Author' className={styles.img} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.from}>{'from ' + `${companyName}`}</div>
        </div>
      </div>
    </section>
  );
};

export { FeedbackItem };

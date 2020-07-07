import * as React from 'react';
import { CaptionProps } from './caption.props';
import * as styles from './caption.scss';

/**
 * Renders Caption
 */
const Caption: React.FC<CaptionProps> = ({ rate, title, children }) => {
  return (
    <div className={styles.caption}>
      <div className={styles.captionRate}>{rate}</div>
      <div className={styles.captionTitle}>{title}</div>
      <div className={styles.captionHr} />
      {children && <div className={styles.captionContent}>{children}</div>}
    </div>
  );
};

export { Caption };

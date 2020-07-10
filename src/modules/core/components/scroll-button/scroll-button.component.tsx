import * as React from 'react';
import { ScrollButtonProps } from './scroll-button.props';
import * as styles from './scroll-button.scss';
import classNames from 'classnames';

/**
 * Renders ScrollButton
 */
const ScrollButton: React.FC<ScrollButtonProps> = ({ text, className }) => {

  const scrollSection = () => {
    window.scrollBy({
      top: window.innerHeight - window.pageYOffset - 60,
      behavior: 'smooth',
    });
  }

  return (
    <div className={classNames(styles.scrollButton, className)}>
      <button onClick={scrollSection}>
        <span className={styles.scroll}>↓ {text}</span>
      </button>
    </div>
  );
};

export { ScrollButton };

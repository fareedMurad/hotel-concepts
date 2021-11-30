import * as React from 'react';
import { ScrollButtonProps } from './scroll-button.props';
import * as styles from './scroll-button.scss';
import classNames from 'classnames';

/**
 * Renders ScrollButton
 */
const ScrollButton: React.FC<ScrollButtonProps> = ({
  text,
  className,
  orangeType
}) => {
  const scrollSection = () => {
    window.scrollBy({
      top: window.innerHeight - window.pageYOffset - 56,
      behavior: 'smooth'
    });
  };

  return (
    <div className={classNames(styles.scrollButton, className)}>
      <button onClick={scrollSection}>
        <span className={styles.scroll}>
          {orangeType ? (
            <img src={require('img/arrows/orange-arrow')} alt='' />
          ) : (
            <React.Fragment>
              <img src={require('img/arrow-dwn.svg')} alt='' />
              {text}
            </React.Fragment>
          )}
        </span>
      </button>
    </div>
  );
};

export { ScrollButton };

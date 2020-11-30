import * as React from 'react';
import { CaptionProps } from './caption.props';
import * as styles from './caption.scss';
import classNames from 'classnames';
import { useToggleAnimate } from '@pages/learning-approach/toggle-animation.hook';
import { useAnimation } from '@pages/learning-approach/animations/animations.hook';
import { animated } from 'react-spring';

/**
 * Render animated caption
 */

const AnimatedCaption: React.FC<CaptionProps> = ({
  rate,
  title,
  children,
  className
}) => {
  const ref = React.useRef();
  const { toggle } = useToggleAnimate(ref);
  const { titleAnimation } = useAnimation(toggle);

  return (
    <animated.div
      className={classNames(styles.caption, className)}
      style={titleAnimation}
      ref={ref}
    >
      <div className={styles.captionRate}>{rate}</div>
      <div className={styles.captionTitle}>{title}</div>
      <div className={styles.captionHr} />
      {children && <div className={styles.captionContent}>{children}</div>}
    </animated.div>
  );
};

/**
 * Renders Caption
 */
const Caption: React.FC<CaptionProps> = ({
  rate,
  title,
  children,
  className
}) => {
  return (
    <div className={classNames(styles.caption, className)}>
      <div className={styles.captionRate}>{rate}</div>
      <div className={styles.captionTitle}>{title}</div>
      <div className={styles.captionHr} />
      {children && <div className={styles.captionContent}>{children}</div>}
    </div>
  );
};

export { Caption, AnimatedCaption };

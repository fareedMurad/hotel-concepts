import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SectionProps } from './section.props';
import * as styles from './section.scss';

/**
 * Renders Section
 */
const Section: React.FC<SectionProps> = ({
  className,
  caption,
  description,
  data
}) => {
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.section, className)}>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
        <div className={styles.caption}>{caption}</div>
      </div>
      <div className={styles.content}>content</div>
    </div>
  );
};

export { Section };

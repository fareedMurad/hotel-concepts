import * as React from 'react';
import { SectionProps } from './section.props';
import * as styles from './section.scss';
import classNames from 'classnames';

/**
 * Renders Section
 */
const Section: React.FC<SectionProps> = ({ className, title, children }) => (
  <div className={classNames(styles.section, className)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>{children}</div>
  </div>
);

export { Section };

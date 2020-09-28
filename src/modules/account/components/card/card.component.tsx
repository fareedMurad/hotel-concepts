import classNames from 'classnames';
import * as React from 'react';
import { CardProps } from './card.props';
import * as styles from './card.scss';

/**
 * Renders Card
 */
const Card: React.FC<CardProps> = ({ className, title, children }) => (
  <div className={classNames(styles.card, className)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>{children}</div>
  </div>
);

export { Card };

import classNames from 'classnames';
import * as React from 'react';
import { TitleProps } from './title.props';
import * as styles from './title.scss';

/**
 * Renders Title
 */
const Title: React.FC<TitleProps> = ({ className, children }) => (
  <div className={classNames(styles.title, className)}>{children}</div>
);

export { Title };

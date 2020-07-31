import * as React from 'react';
import { RichTextDefaultProps } from './rich-text-default.props';
import * as styles from './rich-text-default.scss';

/**
 * Renders RichTextDefault
 */
const RichTextDefault: React.FC<RichTextDefaultProps> = ({ children }) => {
  return <div className={styles.richTextDefault}>{children}</div>;
};

export { RichTextDefault };

import { FaqBlock } from '@pages/components';
import * as React from 'react';
import * as styles from './faq.scss';

/**
 * Renders Faq
 */
const Faq: React.FC = () => (
  <div className={styles.faq}>
    <div className={styles.title}>Frequently Asked Questions</div>
    <FaqBlock className={styles.content} page='marketplace' />
  </div>
);

export { Faq };

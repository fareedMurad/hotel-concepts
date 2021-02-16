import * as React from 'react';
import { FaqItemProps } from './faq-item.props';
import * as styles from './faq-item.scss';
import classNames from 'classnames';

/**
 * Renders FaqItem
 */
const FaqItem: React.FC<FaqItemProps> = ({ name, description }) => {
  const [isOpened, setOpened] = React.useState(false);

  const openItem = () => {
    setOpened(isOpened ? false : true);
  };

  return (
    <div className={styles.faqItem}>
      <div
        onClick={openItem}
        className={classNames(styles.name, { [styles.opened]: isOpened })}
      >
        <div className={styles.indicator}>
          <div
            className={classNames(styles.indicatorIcon, {
              [styles.indicatorIconOpened]: isOpened
            })}
          >
            +
          </div>
        </div>
        <span>{name}</span>
      </div>
      <div
        className={classNames(styles.description, {
          [styles.opened]: isOpened
        })}
      >
        {description}
      </div>
    </div>
  );
};

export { FaqItem };

import * as React from 'react';
import { AccordinProps } from './accordin.props';
import * as styles from './accordin.scss';
import classNames from 'classnames';

/**
 * Renders FaqItem
 */
const Accordin: React.FC<AccordinProps> = ({ classes, name, description }) => {
  const [isOpened, setOpened] = React.useState(false);

  const openItem = () => {
    setOpened(isOpened ? false : true);
  };

  return (
    <div className={classes ? styles[classes] : styles.accordin}>
      <div
        onClick={openItem}
        className={classNames(styles.name, { [styles.opened]: isOpened })}
      >
        <div
          className={classNames(styles.indicator, {
            [styles.bgGreen]: isOpened
          })}
        >
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

export { Accordin };

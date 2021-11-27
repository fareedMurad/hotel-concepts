import * as React from 'react';
import { AccordinProps } from './accordin.props';
import * as styles from './accordin.scss';
import classNames from 'classnames';

/**
 * Renders FaqItem
 */
const Accordin: React.FC<AccordinProps> = ({ name, description, imgSrc }) => {
  const [isOpened, setOpened] = React.useState(false);
  console.log(description, 'des');

  const openItem = () => {
    setOpened(isOpened ? false : true);
  };
  const content = [...description];

  const renderList = () => {
    return (
      <div>
        {content.map((item, i) => (
          <ol className={styles.olList} key={i}>
            <li>
              <h3 className={styles.h3Title}>{item.title}</h3>
            </li>
            <ul>
              {item.items.map((li, key) => (
                <li className={styles.liTitle} key={key}>
                  {li.item}
                </li>
              ))}
            </ul>
          </ol>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.accordin}>
      <div
        onClick={openItem}
        className={classNames(styles.name, { [styles.opened]: isOpened })}
      >
        <div className={styles.imagesrcbox}>
          <img className={styles.imgsrc} src={imgSrc} alt='syllabus' />
          <span>{name}</span>
        </div>
        <div className={styles.indicator}>
          <div
            className={classNames(styles.indicatorIcon, {
              [styles.indicatorIconOpened]: isOpened
            })}
          >
            {isOpened ? '-' : '+'}
            {/* + */}
          </div>
        </div>
      </div>

      <div
        className={classNames(styles.description, {
          [styles.opened]: isOpened
        })}
      >
        {renderList()}
      </div>
    </div>
  );
};

export { Accordin };

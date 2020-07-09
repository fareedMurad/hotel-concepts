import * as React from 'react';
import { OpinionItemProps } from './opinion-item.props';
import * as styles from './opinion-item.scss';

/**
 * Renders OpinionItem
 */
const OpinionItem: React.FC<OpinionItemProps> = ({ name, text, from, img }) => {
  return (
    <section className={styles.opinionItem}>
      <div className={styles.text}>
        {`"${text}"`}
        <div className={styles.container}>
          <img src={require(`img/${img}.png`)} alt="Author" className={styles.img} />
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div  className={styles.from}>{"from " + `"${from}"`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OpinionItem };

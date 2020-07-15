import * as React from 'react';
import { MentorItemProps } from './mentor-item.props';
import * as styles from './mentor-item.scss';

/**
 * Renders MentorItem
 */
const MentorItem: React.FC<MentorItemProps> = ({ name, role, img, path, city, onClick }) => {
  return (
    <div onClick={onClick} className={styles.mentorItem}>
      <div className={styles.imgContainer}>
        <img src={require(`img/${img}.png`)} alt={name} className={styles.img}/>
        <div className={styles.info}>
          <div className={styles.infoText}>
            {`Know about ${name.substr(0, name.indexOf(' '))}`}
          </div>
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{city}, {role}</div>
    </div>
  );
};

export { MentorItem };

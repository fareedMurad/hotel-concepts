import * as React from 'react';
import { ContributorCardProps } from './contributor-card.props';
import * as styles from './contributor-card.scss';

/**
 * Renders ContributorCard
 */
const ContributorCard: React.FC<ContributorCardProps> = ({
  contributor,
  onClick
}) => {
  const {
    name,
    surname,
    city,
    position,
    mentorPicture: { url }
  } = contributor;
  return (
    <div onClick={onClick} className={styles.contributorCard}>
      <div className={styles.imgContainer}>
        <img src={url} alt={name} className={styles.img} />
        <div className={styles.info}>
          <div className={styles.infoText}>
            Know about {name} {surname}
          </div>
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>
        {city}, {position}
      </div>
    </div>
  );
};

export { ContributorCard };

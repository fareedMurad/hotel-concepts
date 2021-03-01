import * as React from 'react';
import { ContributorCardProps } from './contributor-card.props';
import * as styles from './contributor-card.scss';
import Img from 'react-cool-img';
/**
 * Renders ContributorCard
 */
const ContributorCard: React.FC<ContributorCardProps> = ({
  contributor,
  onClick,
  contributorPicture
}) => {
  const {
    name,
    surname,
    from,
    position,
    workAt,
    mentorPicture: { url }
  } = contributor;

  return (
    <div onClick={onClick} className={styles.contributorCard}>
      <div className={styles.imgContainer}>
        {/* <img src={url} alt={name} className={styles.img} /> */}
        <Img
          //костиль з картинкою через різницю в респонсіі
          src={contributorPicture ? contributorPicture : url}
          alt='Person'
          placeholder={require('img/person-placeholder')}
          className={styles.img}
        />
        <div className={styles.info}>
          <div className={styles.infoText}>Know about {name}</div>
        </div>
      </div>
      <div className={styles.name}>
        {name.trim()}&nbsp;{surname.trim()}
      </div>
      <div className={styles.role}>
        {workAt} {position}
      </div>
    </div>
  );
};

export { ContributorCard };

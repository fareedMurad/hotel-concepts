import * as React from 'react';
import { ProgramItemProps } from './program-item.props';
import * as styles from './program-item.scss';
import { Button } from '@core/components';
import { useHistory } from 'react-router';

/**
 * Renders ProgramItem
 */
const ProgramItem: React.FC<ProgramItemProps> = ({ program }) => {
  const {
    name,
    type,
    category,
    duration: { months, sprints },
    price,
    courseImage: { url },
    description,
    sys: { id },
    slug
  } = program;
  const history = useHistory();
  const handleClick = id => () =>
    history.push(`/program/${slug}?programId=${id}`);
    
  return (
    <React.Fragment>
      <div className={styles.programItem}>
        <div className={styles.container}>
          <img src={url} alt='' />
          <div className={styles.info}>
            <div className={styles.type}>{type}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.secondaryInfo}>
              {months} weeks
              <span className={styles.vhr}>|</span>
              {sprints} sprints
              <span className={styles.vhr}>|</span>
              {price}$
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleClick(id)} className={styles.button}>
            <div>Find out more</div> <div> &#8594; </div>
          </Button>
        </div>
      </div>
      <div className={styles.hr} />
    </React.Fragment>
  );
};

export { ProgramItem };

import * as React from 'react';
import { ProgramItemProps } from './program-item.props';
import * as styles from './program-item.scss';
import { Button } from '@core/components';
import { useHistory } from 'react-router';

/**
 * Renders ProgramItem
 */
const ProgramItem: React.FC<ProgramItemProps> = ({
  name, type, category, weeks, sprints, price, img, description, id
}) => {
  const history = useHistory();
  const handleClick = id => () => history.push(`/program/${id}`);

  return (
    <div className={styles.programItem}>
      <div className={styles.container}>
        <img src={require(`img/insights/${img}.png`)} alt=""/>
        <div className={styles.info}>
          <div className={styles.type}>{type}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.secondaryInfo}>
            {weeks} weeks | {sprints} sprints | {price}$
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleClick(id)} className={styles.button}>
          <div>Find out more</div> <div> &#8594; </div>
        </Button>
      </div>
    </div>
  );
};

export { ProgramItem };

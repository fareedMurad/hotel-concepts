import * as React from 'react';
import { ProgramModuleItemProps } from './program-module-item.props';
import * as styles from './program-module-item.scss';
import classNames from 'classnames';
import { Button } from '@core/components';

/**
 * Renders ProgramModuleItem
 */
const ProgramModuleItem: React.FC<ProgramModuleItemProps> = ({
  index,
  name,
  description,
  duration,
  pdf
}) => {
  const { weeks, houers } = duration;
  const [isOpened, toggleOpen] = React.useState(false);
  const updateOpenState = () => {
    toggleOpen(!isOpened);
  };
  const onModuleClick = () => {
    window.open(pdf);
    return true;
  };
  
  return (
    <div className={styles.programModuleItem}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div
            onClick={updateOpenState}
            className={classNames(styles.indicator, {
              [styles.opened]: isOpened
            })}
          />
          <div className={styles.nameBlock}>
            <div>{index + 1}.0</div>
            <div>{name}</div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          {weeks} weeks
          <div className={styles.verHr}>|</div>
          {houers} hrh/week
        </div>
        <div className={styles.btnContainer}>
          <Button
            onClick={onModuleClick}
            theme='secondary'
            className={styles.button}
            children='Module overview'
            arrow='&#8594;'
          />
        </div>
      </div>
      <div
        className={classNames(styles.description, {
          [styles.opened]: isOpened
        })}
      >
        {description}
      </div>
      <div className={styles.hr} />
    </div>
  );
};

export { ProgramModuleItem };

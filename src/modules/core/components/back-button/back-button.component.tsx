import * as React from 'react';
import { BackButtonProps } from './back-button.props';
import * as styles from './back-button.scss';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Icon } from '../icon';

/**
 * Renders BackButton
 */
const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  let history = useHistory();

  const moveBack = () => {
    history.goBack();
  };
  return (
    <div
      onClick={moveBack}
      className={classNames(styles.backButton, className)}
    >
      <Icon name="arrows/arrow-back" className={styles.icon}/>
      <div>Back</div>
    </div>
  );
};

export { BackButton };

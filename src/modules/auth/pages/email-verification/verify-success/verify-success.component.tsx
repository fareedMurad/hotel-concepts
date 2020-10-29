import { Button, Icon } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { VerifySuccessProps } from './verify-success.props';
import * as styles from './verify-success.scss';
import { useTranslation } from 'react-i18next';

/**
 * Renders VerifySuccess
 */
const VerifySuccess: React.FC<VerifySuccessProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={styles.checkEmail}>
      <div className={styles.title}>{t('verify-success.title')}</div>
      <div className={styles.divider} />
      <div className={styles.icon}>
        <Icon name='success-verify' />
      </div>
      <div className={styles.notification}>
        {t('verify-success.notification')}
      </div>
      <Button
        className={styles.button}
        arrow
        onClick={() => dispatch(navigate('/'))}
      >
        {t('verify-success.button-text')}
      </Button>
    </div>
  );
};

export { VerifySuccess };

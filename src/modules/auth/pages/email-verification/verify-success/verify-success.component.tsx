import { Button, Icon, Preloader } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { VerifySuccessProps } from './verify-success.props';
import * as styles from './verify-success.scss';
import { useTranslation } from 'react-i18next';
import { Preloaders } from '@ui/models';

/**
 * Renders VerifySuccess
 */
const VerifySuccess: React.FC<VerifySuccessProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={styles.checkEmail}>
      <Preloader id={Preloaders.profile}>
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
      </Preloader>
    </div>
  );
};

export { VerifySuccess };

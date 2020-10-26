import * as React from 'react';
import { SummaryProps } from './summary.props';
import * as styles from './summary.scss';
import { Button } from '@core/components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';

/**
 * Renders Summary
 */
const Summary: React.FC<SummaryProps> = ({ className, summaryData }) => {
  const { total, estimatedShipping, estimatedTax, onClick } = summaryData || {};
  const { user, authorized } = useSelector((state: State) => state.auth);
  const { t } = useTranslation();
  const isAccountVerified = user ? user.verified : false;

  return (
    <div className={classNames(styles.summary, className)}>
      <div className={styles.title}>{t('cart.summary.title')}</div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionLabel}>{t('cart.summary.total')}</div>
          <div className={styles.sectionValue}>$ {total}</div>
        </div>
        {estimatedShipping && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>
              {t('cart.summary.shiping')}
            </div>
            <div
              className={classNames(
                styles.sectionValue,
                styles.sectionValueShipping
              )}
            >
              {estimatedShipping}
            </div>
          </div>
        )}
        {estimatedTax && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>{t('cart.summary.tax')}</div>
            <div className={styles.sectionValue}>$ {estimatedTax}</div>
          </div>
        )}
        <div className={styles.hr} />
        <div className={styles.total}>
          <div>{t('cart.summary.order')}</div>
          <div>$ {total}</div>
        </div>
        <Button
          arrow
          className={styles.submit}
          onClick={onClick}
          disabled={authorized && !isAccountVerified}
        >
          {t('cart.summary.button-text')}
        </Button>

        {/* 
        Disabled until clearify with client

        <Button
          arrow
          className={styles.submit}
          onClick={onClick}
          theme='secondary'
          disabled={isAccountVerified}
        >
          {t('cart.summary.button-text-second')}
        </Button> */}
        <div className={styles.hint}>{t('cart.summary.hint')}</div>
      </div>
    </div>
  );
};

export { Summary };

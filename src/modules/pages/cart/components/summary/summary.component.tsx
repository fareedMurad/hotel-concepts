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
  const { t } = useTranslation();
  const { total, estimatedShipping, estimatedTax, onClick, showInvoiceModal } =
    summaryData || {};
  const { user, authorized } = useSelector((state: State) => state.auth);

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
          disabled={!isAccountVerified}
        >
          Checkout with your account
        </Button>
        {!authorized && (
          <Button
            arrow
            className={styles.submit}
            onClick={showInvoiceModal}
            theme='secondary'
          >
            Checkout as a guest
          </Button>
        )}
      </div>
    </div>
  );
};

export { Summary };

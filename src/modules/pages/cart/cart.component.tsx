import * as React from 'react';
import * as styles from './cart.scss';
import { Button, Icon, Preloader } from '@core/components';
import { CartItem, Summary } from './components';
import { Fragment } from 'react';
import { ModalInvoiceRequest } from './components/modal-invoice-request';
import { Preloaders } from '@ui/models';
import { ScrollToTop } from '@app';
import { SuccessAlertModal } from '@pages/components/success-alert-modal';
import { navigate } from '@router/store';
import { useCartData } from './cart.hook';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Placeholder
 */
const CartPlaceholder: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={styles.placeholder}>
      <div className={styles.placeholderIcon}>
        <Icon name='basket-placeholder' />
      </div>
      <div className={styles.placeholderCaption}>
        {t('cart.placeholder.caption')}
      </div>
      <Button
        className={styles.placeholderButton}
        width={250}
        arrow
        onClick={() => dispatch(navigate('/'))}
      >
        {t('cart.placeholder.button-text')}
      </Button>
    </div>
  );
};

/**
 * Renders Cart
 */
const Cart: React.FC = () => {
  const { products, summaryData, authorized } = useCartData();
  const { t } = useTranslation();
  const cartQuantity = products?.length;

  return (
    <div className={styles.cart}>
      <ScrollToTop />
      <div className={styles.header}>
        <div className={styles.headerWrap}>
          <div className={styles.headerTitle}>{t('cart.title')}</div>
          <div className={styles.headerQuantity}>
            {cartQuantity || 0} {t('cart.items')}
          </div>
        </div>
        <span className={styles.headerPrecaption}>{t('cart.precaption')}</span>
      </div>

      <div className={styles.container}>
        <Preloader id={Preloaders.cart}>
          {cartQuantity > 0 ? (
            <Fragment>
              <div className={styles.content}>
                <div className={styles.products}>
                  {products?.map(product => (
                    <CartItem key={product.id} {...product} />
                  ))}
                </div>
                <div className={styles.hr} />
                <Summary summaryData={summaryData} />
              </div>
              <div className={styles.alternatives}>
                {/* <div className={styles.hint}>{t('cart.hint')}</div> */}
                <div className={styles.divider}>
                  <span className={styles.dividerLine} />
                  <div className={styles.dividerCaption}>
                    {t('cart.diviver-caption')}
                  </div>
                  <span className={styles.dividerLine} />
                </div>
                <div className={styles.paymentMethods}>
                  <img src={require('img/payments/visa.png')} width={90} />
                  <img
                    src={require('img/payments/master-card.png')}
                    width={47}
                  />
                  <img
                    src={require('img/payments/american-express.png')}
                    width={45}
                  />
                  <img src={require('img/payments/paypal.png')} width={102} />
                </div>
              </div>
            </Fragment>
          ) : (
            <CartPlaceholder />
          )}
        </Preloader>
        <ModalInvoiceRequest total={summaryData?.total} />
        <SuccessAlertModal />
      </div>
    </div>
  );
};

export { Cart };

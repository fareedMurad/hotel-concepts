import * as React from 'react';
import { PaymentMethodProps } from './payment-method.props';
import * as styles from './payment-method.scss';
import { Formik, Form } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectPaymentMethods } from '@app/redux/account';
import { usePaymentmethodData } from './payment-method.hook';
import { Preloaders } from '@ui/models';
import { State } from '@app/redux/state';

/**
 * Renders PaymentMethod
 */
const PaymentMethod: React.FC<PaymentMethodProps> = ({}) => {
  const { defaultValues } = usePaymentmethodData();
  const { selectPaymentMethodsSuccess } = useSelector(
    (state: State) => state.account
  );

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className={styles.title}>Prefer payment method</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          dispatch(selectPaymentMethods(values));
          console.log(values);
        }}
      >
        {({ handleSubmit, values }) => (
          <Form className={styles.form}>
            <Field.Checkbox name='card' label='Credit/debit card' />
            <Field.Checkbox name='paypal' label='PauPal' />
            <Field.Checkbox
              name='transfer'
              label='Bank transfer with invoice'
            />
            <div style={{ position: 'relative' }}>
              <Button
                disabled={selectPaymentMethodsSuccess}
                className={styles.formSubmitButton}
                onClick={() => handleSubmit()}
              >
                {selectPaymentMethodsSuccess ? 'Saved' : 'Save'}
              </Button>
              <Preloader
                className={styles.preloader}
                id={Preloaders.paymentMethods}
                size={20}
                thickness={5}
              />
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { PaymentMethod };

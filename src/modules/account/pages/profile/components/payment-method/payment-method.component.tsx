import * as React from 'react';
import { PaymentMethodProps } from './payment-method.props';
import * as styles from './payment-method.scss';
import { Formik, Form } from 'formik';
import { Field, Button } from '@core/components';
import { useDispatch } from 'react-redux';
import { selectPaymentMethods } from '@app/redux/account';
import { usePaymentmethodData } from './payment-method.hook';

/**
 * Renders PaymentMethod
 */
const PaymentMethod: React.FC<PaymentMethodProps> = ({}) => {
  const { defaultValues } = usePaymentmethodData();
  console.log(defaultValues);
  const dispatch = useDispatch();

  const isMethodIncluded = method => {
    console.log(defaultValues.paymentMethods.find(el => el === method));
    return defaultValues.paymentMethods.find(el => el === method);
  };
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
            <Field.Checkbox
              defaultChecked={isMethodIncluded('card') ? true : false}
              name='card'
              label='Credit/debit card'
            />
            <Field.Checkbox
              name='paypal'
              label='PauPal'
              defaultChecked={isMethodIncluded('paypal') ? true : false}
            />
            <Field.Checkbox
              name='transfer'
              label='Bank transfer with invoice'
              defaultChecked={isMethodIncluded('transfer') ? true : false}
            />
            <Button
              className={styles.formSubmitButton}
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { PaymentMethod };

import * as React from 'react';
import { PaymentMethodProps } from './payment-method.props';
import * as styles from './payment-method.scss';
import { Formik, Form } from 'formik';
import { Field, Button } from '@core/components';

const defaultValues = {
  creditCard: '',
  paypal: '',
  bankTransfer: ''
};
/**
 * Renders PaymentMethod
 */
const PaymentMethod: React.FC<PaymentMethodProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Prefer payment method</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form className={styles.form}>
            <Field.Checkbox name='creditCard' label='Credit/debit card' />
            <Field.Checkbox name='paypal' label='PauPal' />
            <Field.Checkbox
              name='bankTransfer'
              label='Bank transfer with invoice'
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

import { Card } from '@account/components';
import { selectPaymentMethods } from '@app/redux/account';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { usePaymentMethodsData } from './payment-methods.hook';
import { PaymentMethodsProps } from './payment-methods.props';
import * as styles from './payment-methods.scss';

const paymentMethods = [
  { value: 'card', label: '' },
  { value: 'paypal', label: '' },
  { value: 'transfer', label: '' }
];

/**
 * Renders PaymentMethods
 */
const PaymentMethods: React.FC<PaymentMethodsProps> = ({ className }) => {
  const { user, defaultValues } = usePaymentMethodsData();
  const dispatch = useDispatch();

  return (
    <Card
      className={classNames(styles.paymentMethods, className)}
      title='Preffered payment metod'
      offsetTop={22}
    >
      <Preloader id={Preloaders.profilePaymentMethods}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          onSubmit={values => {
            dispatch(selectPaymentMethods(values));
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Checkbox name='card' label='Credit/debit card' />
              <Field.Checkbox name='paypal' label='PayPal' />
              <Field.Checkbox
                name='transfer'
                label='Bank transfer with invoice'
              />
              {/* <Field.CheckboxGroup
                name='paymentMethods'
                data={paymentMethods}
                className={styles.checkboxGroup}
              /> */}
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save
              </Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { PaymentMethods };

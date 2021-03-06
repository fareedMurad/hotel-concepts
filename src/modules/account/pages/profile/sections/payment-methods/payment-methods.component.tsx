import { Card } from '@account/components';
import { editPaymentMethods } from '@app/redux/account';
import { Button, Field, FormNew, Preloader } from '@core/components';
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
    >
      <Preloader id={Preloaders.profilePaymentMethods} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          onSubmit={values => {
            dispatch(editPaymentMethods(values));
          }}
        >
          {({ handleSubmit }) => (
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Checkbox
                labelClassname={styles.checkboxLabel}
                name='card'
                label='Credit/debit card'
              />
              <Field.Checkbox
                labelClassname={styles.checkboxLabel}
                name='paypal'
                label='PayPal'
              />
              <Field.Checkbox
                labelClassname={styles.checkboxLabel}
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
            </FormNew>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { PaymentMethods };

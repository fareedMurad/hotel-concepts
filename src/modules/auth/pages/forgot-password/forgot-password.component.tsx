import * as React from 'react';
import { ForgotPasswordProps } from './forgot-password.props';
import * as styles from './forgot-password.scss';
import { Formik } from 'formik';
import { Preloader, Button, Field } from '@core/components';
import { Preloaders } from '@ui/models';
import { useDispatch } from 'react-redux';
import {
  forgotPasswordValidationSchema,
  ForgotPasswordValues
} from '@auth/models';
import { forgotPassword } from '@app/redux/auth';

/**
 * Default Values
 */
const defaultValues: ForgotPasswordValues = {
  email: ''
};

/**
 * Renders ForgotPassword
 */
const ForgotPassword: React.FC<ForgotPasswordProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.forgotPassword}>
      <Preloader id={Preloaders.forgotPassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={values => {
            dispatch(forgotPassword(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Text name='email' label='Email' />
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { ForgotPassword };

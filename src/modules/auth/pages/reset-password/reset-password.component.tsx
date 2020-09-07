import * as React from 'react';
import { ResetPasswordProps } from './reset-password.props';
import * as styles from './reset-password.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  ResetPasswordValues,
  resetPasswordValidationSchema
} from '@auth/models';
import { resetPassword } from '@app/redux/auth';
import { Field, Button } from '@core/components';

/**
 * Default Values
 */
const defaultValues: ResetPasswordValues = {
  email: ''
};

/**
 * Renders ResetPassword
 */
const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={resetPasswordValidationSchema}
      onSubmit={values => {
        dispatch(resetPassword(values));
      }}
    >
      {({ handleSubmit }) => (
        <div className={styles.resetPassword}>
          <Field.Text name='email' label='Email' />
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      )}
    </Formik>
  );
};

export { ResetPassword };

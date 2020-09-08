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
import { Field, Button, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';

/**
 * Default Values
 */
const defaultValues: ResetPasswordValues = {
  password: ''
};

/**
 * Renders ResetPassword
 */
const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.resetPassword}>
      <Preloader id={Preloaders.resetPassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={values => {
            dispatch(resetPassword(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Text name='password' label='New password' />
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { ResetPassword };

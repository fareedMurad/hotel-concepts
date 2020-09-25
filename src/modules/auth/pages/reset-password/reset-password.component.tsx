import { resetPassword } from '@app/redux/auth';
import {
  resetPasswordValidationSchema,
  ResetPasswordValues
} from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useResetPasswordData } from './reset-password.hook';
import * as styles from './reset-password.scss';

/**
 * Default Values
 */
const defaultValues: ResetPasswordValues = {
  password: ''
};

/**
 * Renders ResetPassword
 */
const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useResetPasswordData();

  return (
    <div className={styles.resetPassword}>
      <Preloader id={Preloaders.resetPassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={values => {
            dispatch(resetPassword({ values, token }));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Text
                name='password'
                label='New password'
                type='password'
              />
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { ResetPassword };

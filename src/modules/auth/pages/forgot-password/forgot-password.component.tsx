import { forgotPassword } from '@app/redux/auth';
import { State } from '@app/redux/state';
import {
  forgotPasswordValidationSchema,
  ForgotPasswordValues
} from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForgotPasswordProps } from './forgot-password.props';
import * as styles from './forgot-password.scss';

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
  const { passwordRecoverySent } = useSelector((state: State) => state.auth);

  return (
    <div className={styles.forgotPassword}>
      <Preloader id={Preloaders.forgotPassword}>
        {!passwordRecoverySent ? (
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
        ) : (
          <div className={styles.success}>
            <div className={styles.successCaption}>
              We have sent you an email to update your password
            </div>
          </div>
        )}
      </Preloader>
    </div>
  );
};

export { ForgotPassword };

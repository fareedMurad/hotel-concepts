import { ScrollToTop } from '@app';
import { login } from '@app/redux/auth';
import { AuthHeader } from '@auth/components';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './login.scss';

/**
 * Default Values
 */
const defaultValues: LoginValues = {
  email: '',
  password: ''
};

/**
 * Renders Register
 */
const Login: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.login}>
      <ScrollToTop />
      {/* <ForgotPasswordModal/> */}
      <Preloader id={Preloaders.login}>
        <AuthHeader />
        <Fragment>
          <Formik
            initialValues={defaultValues}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
              dispatch(login(values));
            }}
          >
            {({ handleSubmit }) => (
              <Form className={styles.form}>
                <Field.Text
                  name='email'
                  label='Email'
                  className={styles.formInput}
                />
                <Field.Text
                  name='password'
                  label='Password'
                  type='password'
                  className={styles.formInput}
                />
                <div className={styles.formHintText}>
                  By clicking Sign In, you agree to our{' '}
                  <span>Terms of Use</span> and our <span>Privacy Policy</span>
                </div>
                <Button
                  className={styles.submit}
                  onClick={() => handleSubmit()}
                  arrow='→'
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>

          <div
            className={styles.forgotPassword}
            onClick={() => dispatch(navigate('/auth/forgot-password'))}
          >
            Forgot password?
          </div>
          <div
            className={styles.needAccount}
            onClick={() => dispatch(navigate('/auth/register'))}
          >
            Need an account? <span>Sign Up</span>
          </div>
        </Fragment>
      </Preloader>
    </div>
  );
};

export { Login };

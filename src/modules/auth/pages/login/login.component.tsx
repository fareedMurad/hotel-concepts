import { ScrollToTop } from '@app';
import { login } from '@app/redux/auth';
import { AuthHeader } from '@auth/components';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
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
                  className={styles.input}
                />
                <Field.Text
                  name='password'
                  label='Password'
                  type='password'
                  className={styles.input}
                />
                <div className={styles.hint}>
                  By clicking Sign In, you agree to our{' '}
                  <span className={styles.hintBold}>Terms of Use</span> and our{' '}
                  <span className={styles.hintBold}>Privacy Policy</span>
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
            onClick={() => dispatch(showModal(Modals.forgotPassword))}
          >
            Forgot your password?
          </div>
          <div className={styles.signUp}>
            Need an account?
            <span
              className={styles.signUpLink}
              onClick={() => dispatch(navigate('/auth/register'))}
            >
              Sign Up
            </span>
          </div>
        </Fragment>
      </Preloader>
    </div>
  );
};

export { Login };

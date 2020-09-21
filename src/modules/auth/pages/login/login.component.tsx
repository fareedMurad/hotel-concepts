import * as React from 'react';

import * as styles from './login.scss';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import { LoginValues, loginValidationSchema } from '@auth/models';
import { login } from '@app/redux/auth';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Fragment } from 'react';
import { SignInSignUpHeader } from '../components/sign-in-sign-up-header';
import { ScrollToTop } from '@app';

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
        <SignInSignUpHeader title='Sing in to your account' />

        <Fragment>
          <Formik
            initialValues={defaultValues}
            validationSchema={loginValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values, action) => {
              console.log(values);
              await action.validateForm(values);
              dispatch(login(values));
            }}
          >
            {({ handleSubmit, handleReset }) => (
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
                  By clicking Sign Up, you agree to our{' '}
                  <span>Terms of Use</span> and our <span>Privacy Policy</span>
                </div>
                <div className={styles.formButton}>
                  <Button
                    width='100%'
                    onClick={() => {
                      scrollTo(0, 0);
                      handleSubmit();
                      setTimeout(() => handleReset(), 1000);
                    }}
                    arrow='→'
                  >
                    Sign In
                  </Button>
                  <Preloader
                    className={styles.formPreloader}
                    id={Preloaders.updatePassword}
                    size={20}
                    thickness={5}
                  />
                </div>
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
            Need an account? <span>Sing Up</span>
          </div>
        </Fragment>
      </Preloader>
    </div>
  );
};

export { Login };

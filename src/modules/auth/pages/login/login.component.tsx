import * as React from 'react';
import { useRegisterData } from './login.hook';
import * as styles from './login.scss';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import { LoginValues, loginValidationSchema } from '@auth/models';
import { register, login } from '@app/redux/auth';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Sso } from '@auth/components';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

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
      <div className={styles.form}>
        <div className={styles.formTitles}>
          <NavLink
            activeClassName={styles.formTitlesActive}
            to={'/auth/register'}
          >
            Sign up
          </NavLink>
          <NavLink activeClassName={styles.formTitlesActive} to={'/auth/login'}>
            Sign in
          </NavLink>
        </div>
        <Preloader id={Preloaders.register}>
          <Fragment>
            <Formik
              initialValues={defaultValues}
              validationSchema={loginValidationSchema}
              onSubmit={values => {
                console.log(values);
                dispatch(login(values));
              }}
            >
              {({ handleSubmit, handleReset }) => (
                <Form className={styles.form}>
                  <Field.Text name='email' label='Email' />
                  <Field.Text
                    name='password'
                    label='Password'
                    type='password'
                  />
                  <div className={styles.formButton}>
                    <Button
                      onClick={() => {
                        handleSubmit();
                        setTimeout(() => handleReset(), 1000);
                      }}
                    >
                      Login
                    </Button>
                    <Preloader
                      className={styles.formPreloader}
                      id={Preloaders.updatePassword}
                      size={20}
                      thickness={5}
                    />
                  </div>
                  <div
                    className={styles.forgotPassword}
                    onClick={() => dispatch(navigate('/auth/forgot-password'))}
                  >
                    Forgot password?
                  </div>
                </Form>
              )}
            </Formik>
          </Fragment>
        </Preloader>
      </div>
    </div>
  );
};

export { Login };

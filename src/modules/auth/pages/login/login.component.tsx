import { login } from '@app/redux/auth';
import { Sso } from '@auth/components';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LoginProps } from './login.props';
import * as styles from './login.scss';

/**
 * Default Values
 */
const defaultValues: LoginValues = {
  email: '',
  password: ''
};

/**
 * Renders Login
 */
const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.login}>
      <Preloader id={Preloaders.login}>
        <Formik
          initialValues={defaultValues}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            dispatch(login(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Text name='email' label='Email' />
              <Field.Text name='password' label='Password' />
              <Button onClick={() => handleSubmit()}>Login</Button>
              <Button onClick={() => dispatch(navigate('/auth/register'))}>
                Sign up
              </Button>
              <Button
                onClick={() => dispatch(navigate('/auth/forgot-password'))}
              >
                Forgot password?
              </Button>
            </div>
          )}
        </Formik>
        <Sso className={styles.socials} />
      </Preloader>
    </div>
  );
};

export { Login };

import * as React from 'react';
import { LoginProps } from './login.props';
import * as styles from './login.scss';
import { Formik } from 'formik';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { useDispatch } from 'react-redux';
import { Field, Button } from '@core/components';
import { login, signInWithGoogle, signInWithFacebook } from '@app/redux/auth';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { navigate } from '@router/store';

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
  const responseGoogle = response => {
    dispatch(signInWithGoogle(response));
  };
  const responseFacebook = response => {
    dispatch(signInWithFacebook(response));
  };

  return (
    <div className={styles.login}>
      <Formik
        initialValues={defaultValues}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
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
          </div>
        )}
      </Formik>
      <div className={styles.socials}>
        <GoogleLogin
          clientId='293038701913-22g38t0rpep02thga71qsonelnlinqrf.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={response => {
            responseGoogle(response);
          }}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <FacebookLogin
          appId='978057235952932'
          fields='name,email,picture'
          callback={responseFacebook}
        />
      </div>
    </div>
  );
};

export { Login };

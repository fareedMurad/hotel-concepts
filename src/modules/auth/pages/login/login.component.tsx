import * as React from 'react';
import { LoginProps } from './login.props';
import * as styles from './login.scss';
import { Formik } from 'formik';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { useDispatch } from 'react-redux';
import { Field, Button } from '@core/components';
import { login, signInWithGoogle, signInWithFacebook } from '@app/redux/auth';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

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
    dispatch(signInWithGoogle(response.profileObj));
  };
  const responseFacebook = response => {
    dispatch(signInWithFacebook(response));
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={defaultValues}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          dispatch(login(values));
        }}
      >
        {({ handleSubmit }) => (
          <div className={styles.login}>
            <Field.Text name='email' label='Email' />
            <Field.Text name='password' label='Password' />
            <Button onClick={() => handleSubmit()}>Login</Button>
          </div>
        )}
      </Formik>
      <div className={styles.auth}>
        <GoogleLogin
          clientId='293038701913-22g38t0rpep02thga71qsonelnlinqrf.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <FacebookLogin
          appId='978057235952932'
          fields='name,email,picture'
          callback={responseFacebook}
        />
      </div>
    </React.Fragment>
  );
};

export { Login };

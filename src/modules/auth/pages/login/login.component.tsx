import * as React from 'react';
import { LoginProps } from './login.props';
import * as styles from './login.scss';
import { Formik } from 'formik';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { useDispatch } from 'react-redux';
import { Field, Button, Preloader } from '@core/components';
import { login, googleSignIn, facebookSignIn, getUser } from '@app/redux/auth';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { enviroment } from 'src/environment';

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
  const { googleClientId, facebookAppId } = enviroment || {};
  const responseGoogle = response => {
    dispatch(googleSignIn(response.profileObj));
  };
  const responseFacebook = response => {
    dispatch(facebookSignIn(response));
  };

  return (
    <div className={styles.login}>
      <Preloader id={Preloaders.login}>
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
            clientId={googleClientId}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <FacebookLogin
            appId={facebookAppId}
            fields='name,email,picture'
            callback={responseFacebook}
          />
        </div>
      </Preloader>
    </div>
  );
};

export { Login };

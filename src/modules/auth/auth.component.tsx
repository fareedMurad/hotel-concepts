import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { signInWithGoogle, signInWithFacebook } from './store';
/**
 * Renders Auth
 */
const Auth: React.FC<AuthProps> = ({}) => {
  const dispatch = useDispatch();
  const responseGoogle = response => {
    dispatch(signInWithGoogle(response.profileObj));
  };
  const responseFacebook = response => {
    dispatch(signInWithFacebook(response));
  };
  return (
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
  );
};

export { Auth };

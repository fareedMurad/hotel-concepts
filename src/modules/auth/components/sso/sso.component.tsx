import * as React from 'react';
import { SsoProps } from './sso.props';
import * as styles from './sso.scss';
import { enviroment } from 'src/environment';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookSignIn, googleSignIn } from '@app/redux/auth';
import { useLocation } from 'react-router';

const FacebookIcon: React.FC = () => (
  <img src={require(`img/facebook-icon.svg`)} alt='facebook' />
);

/**
 * Renders Sso
 */
const Sso: React.FC<SsoProps> = ({ className, isLogin }) => {
  const dispatch = useDispatch();
  const { googleClientId, facebookAppId } = enviroment || {};
  const { pathname } = useLocation();

  return (
    <div className={classNames(styles.sso, className)}>
      <div>
        <GoogleLogin
          buttonText='Login'
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={styles.customLogIn}
            >
              {isLogin ? 'Sign in' : 'Sign up'} with Google
              <img src={require(`img/google-icon.svg`)} />
            </button>
          )}
          clientId={googleClientId}
          cookiePolicy='single_host_origin'
          onFailure={err => console.log(err)}
          onSuccess={(data: any) => {
            dispatch(googleSignIn({ data: data, from: pathname }));
          }}
        />
      </div>
      <div>
        <FacebookLogin
          appId={facebookAppId}
          fields='name,email,picture'
          textButton={`${isLogin ? 'Sign in' : 'Sign up'} with Facebook`}
          cssClass={styles.customLogIn}
          icon={<FacebookIcon />}
          scope='public_profile,email'
          isMobile={false}
          disableMobileRedirect
          callback={data => {
            dispatch(facebookSignIn({ data: data, from: pathname }));
          }}
        />
      </div>
    </div>
  );
};

export { Sso };

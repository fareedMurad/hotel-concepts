import * as React from 'react';
import { SsoProps } from './sso.props';
import * as styles from './sso.scss';
import { enviroment } from 'src/environment';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookSignIn, googleSignIn } from '@app/redux/auth';

// import { ReactComponent as FaceBookIcon } from '../../../../assets/img/facebook-icon.svg';

const FacebookIcon: React.FC<any> = () => {
  return <img src={require(`img/facebook-icon.svg`)} alt='facebook' />;
};

/**
 * Renders Sso
 */
const Sso: React.FC<SsoProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { googleClientId, facebookAppId } = enviroment || {};

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
              Sing up with Google
              <img src={require(`img/google-icon.svg`)} />
            </button>
          )}
          clientId={googleClientId}
          cookiePolicy='single_host_origin'
          onFailure={err => console.log(err)}
          onSuccess={(data: any) => {
            dispatch(googleSignIn(data));
          }}
        />
      </div>
      <div>
        <FacebookLogin
          appId={facebookAppId}
          fields='name,email,picture'
          textButton='Sing up with Facebook'
          cssClass={styles.customLogIn}
          icon={<FacebookIcon />}
          scope='public_profile,email'
          callback={data => {
            dispatch(facebookSignIn(data));
          }}
        />
      </div>
    </div>
  );
};

export { Sso };

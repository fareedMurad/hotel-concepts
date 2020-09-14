import { GoogleSignInModel, FacebookSignInModel, User } from '@app/models';
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse
} from 'react-facebook-login';

/**
 * auth state
 */
class AuthState {
  /**
   * Is user authorized
   */
  public authorized: boolean = false;
  /**
   * Registration status
   */
  public registered: boolean = false;
  /**
   * User
   */
  public user: User = null;
  /**
   * Email verification status
   */
  public emailVerified: boolean = false;
  /**
   * Password recovery status
   */
  public passwordRecoverySent: boolean = false;
  /**
   *
   */
  public googleSignInData: GoogleSignInModel = null;
  public facebookSignInData:
    | ReactFacebookLoginInfo
    | ReactFacebookFailureResponse = null;
}

export { AuthState };

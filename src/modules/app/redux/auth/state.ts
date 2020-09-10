import { GoogleSignInModel, FacebookSignInModel } from '@app/models';

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
  public facebookSignInData: FacebookSignInModel = null;
}

export { AuthState };

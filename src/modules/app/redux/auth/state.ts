import { GoogleSignInModel, FacebookSignInModel, User } from '@app/models';

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
  public facebookSignInData: FacebookSignInModel = null;
}

export { AuthState };

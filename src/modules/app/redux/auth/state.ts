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
   *
   */
  public googleSignInData: GoogleSignInModel = null;
  public facebookSignInData: FacebookSignInModel = null;
}

export { AuthState };

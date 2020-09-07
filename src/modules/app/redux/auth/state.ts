import { GoogleSignInModel, FacebookSignInModel } from '@app/models';

/**
 * auth state
 */
class AuthState {
  public authorized: boolean = false;
  public googleSignInData: GoogleSignInModel = null;
  public facebookSignInData: FacebookSignInModel = null;
}

export { AuthState };

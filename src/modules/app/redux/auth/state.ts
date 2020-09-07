/**
 * auth state
 */
class AuthState {
  public authorized: boolean = false;
  public googleSignInData: {
    googleId?: string;
    imageUrl?: string;
    email?: string;
    name?: string;
    givenName?: string;
    familyName?: string;
  } = null;
  public facebookSignInData: {
    name?: string;
    surname?: string;
    email?: string;
  } = null;
}

export { AuthState };

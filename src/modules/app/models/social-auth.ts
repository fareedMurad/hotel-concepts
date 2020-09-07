/**
 * Google sign in model
 */
type GoogleSignInModel = {
  googleId?: string;
  imageUrl?: string;
  email?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
};

/**
 * Facebook sign in model
 */
type FacebookSignInModel = {
  name?: string;
  surname?: string;
  email?: string;
};

export { GoogleSignInModel, FacebookSignInModel };

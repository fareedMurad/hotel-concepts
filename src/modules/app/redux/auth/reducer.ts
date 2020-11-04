import { reducer } from 'redux-chill';
import {
  authorize,
  facebookSignIn,
  googleSignIn,
  unauthorize,
  verifyEmail,
  register,
  forgotPassword,
  getUser,
  updatePassword,
  changeUserLanguage
} from './actions';
import { AuthState } from './state';

/**
 * auth state
 */
const auth = reducer(new AuthState())
  .on(authorize, state => {
    state.authorized = true;
  })
  .on(unauthorize, state => {
    state.authorized = false;
    state.emailVerified = false;
  })
  .on(getUser.success, (state, payload) => {
    state.user = payload;
    state.authorized = true;
  })
  .on(register.success, state => {
    state.registered = true;
  })
  .on(verifyEmail.success, state => {
    state.emailVerified = true;
  })
  .on(forgotPassword.success, state => {
    state.passwordRecoverySent = true;
  })
  .on(googleSignIn, (state, payload) => {
    state.googleSignInData = payload;
  })
  .on(facebookSignIn, (state, payload) => {
    state.facebookSignInData = payload;
  })
  .on(changeUserLanguage, (state, payload) => {
    if (state.user !== null) {
      state.user.language = payload;
    }
  });

export { auth };

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
  updatePassword
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
  })
  .on(getUser.success, (state, payload) => {
    state.user = payload;
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
  });

export { auth };

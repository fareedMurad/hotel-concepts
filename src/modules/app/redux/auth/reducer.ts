import { AuthState } from './state';
import { reducer } from 'redux-chill';
import { signInWithGoogle, signInWithFacebook } from './actions';

/**
 * auth state
 */
const auth = reducer(new AuthState())
  .on(signInWithGoogle, (state, payload) => {
    state.authorized = true;
    state.googleSignInData = payload;
  })
  .on(signInWithFacebook, (state, payload) => {
    state.authorized = true;
    state.facebookSignInData = payload;
  });

export { auth };

import { authState } from './state';
import { reducer } from 'redux-chill';
import { signInWithGoogle, signInWithFacebook } from './actions';
/**
 * auth-google state
 */
const auth = reducer(new authState())
  .on(signInWithGoogle, (state, payload) => {
    state.authorized = true;
    state.googleSignInData = payload;
  })
  .on(signInWithFacebook, (state, payload) => {
    state.authorized = true;
    state.facebookSignInData = payload;
  });

export { auth };

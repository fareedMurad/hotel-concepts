import { reducer } from 'redux-chill';
import {
  authorize,
  facebookSignIn,
  googleSignIn,
  unauthorize
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
  .on(googleSignIn, (state, payload) => {
    state.googleSignInData = payload;
  })
  .on(facebookSignIn, (state, payload) => {
    state.facebookSignInData = payload;
  });

export { auth };

import { make } from 'redux-chill';

/*
 * siggn-in with google
 */

const signInWithGoogle = make('[auth] sign-in with google').stage(
  payload => payload
);

const signInWithFacebook = make('[auth] sign-in with facebook').stage(
  payload => payload
);

export { signInWithGoogle, signInWithFacebook };

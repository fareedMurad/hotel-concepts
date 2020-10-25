import { make } from 'redux-chill';

/*
 * Background-color white
 */
const setBackgroundWhite = make('[header] is background white ').stage(
  (payload: boolean) => payload
);

export { setBackgroundWhite };

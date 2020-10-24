import { make } from 'redux-chill';

/*
 * Background-color white
 */
const isBackgroundWhite = make('[header] is background white ').stage(
  (payload: boolean) => payload
);
/**
 * sticky header
 */
const setStickyHeader = make('[header] sticky').stage(
  (payload: boolean) => payload
);

export { isBackgroundWhite, setStickyHeader };

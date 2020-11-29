import { make } from 'redux-chill';

/**
 * Startup application
 */
const startup = make('[general] startup').stage('success');

/**
 * Handle error
 */
const handleError = make('[general] handle error').stage(
  (message: string | string[]) => message
);

/**
 * Handle cookie notifier
 */
const toggleCookieBanner = make('[general] toggle cookie banner').stage(
  (payload: boolean) => payload
);
/*
 * Check browser version
 */
const checkBrowserVersion = make('[general] check browser version').stage(
  (payload: { name: string; version: string }) => payload
);

export { startup, handleError, toggleCookieBanner, checkBrowserVersion };

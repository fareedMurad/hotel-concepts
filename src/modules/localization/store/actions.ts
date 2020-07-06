import { make } from 'redux-chill';

/**
 * Set app language
 */
const changeLanguage = make('[localization] change language').stage(
  (language: string) => language
);

/**
 * Start initial language setup
 */
const setupLocalization = make('[localization] setup localization')
  .stage((language: string) => language)
  .stage('success');

export { setupLocalization, changeLanguage };

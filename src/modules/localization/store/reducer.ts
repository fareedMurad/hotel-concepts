import { reducer } from 'redux-chill';
import { setupLocalization, changeLanguage } from './actions';
import { Language } from '@app/models/enum';

/**
 * Defaults
 */
const defaultState = {
  language: navigator.language
};

/**
 * Current localization settings
 */
const localization = reducer(defaultState).on(
  [setupLocalization, changeLanguage],
  (state, language) => {
    state.language = language;
  }
);

export { localization };

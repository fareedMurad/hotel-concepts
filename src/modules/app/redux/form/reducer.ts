import { FormState } from './state';
import { reducer } from 'redux-chill';

/**
 * form state
 */
const form = reducer(new FormState());

export { form };

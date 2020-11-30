import { sendForm } from './actions';
import { FormState } from './state';
import { reducer } from 'redux-chill';

/**
 * form state
 */
const form = reducer(new FormState()).on(
  sendForm.subscribeBeta,
  state => (state.showSubscribeModal = false)
);

export { form };

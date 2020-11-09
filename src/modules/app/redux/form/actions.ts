import { FormModel } from './../../models/form';
import { make } from 'redux-chill';

/*
 * Send form
 */

const sendForm = make('[Form] send form').stage(
  <T extends FormModel>(payload: T) => payload
);

export { sendForm };

import * as yup from 'yup';
import { FAQFormValues } from '@app/models/form';

const FAQFormValidationSchema = yup.object().shape<FAQFormValues>({
  email: yup
    .string()
    .email()
    .label('Email')
    .required(),
  name: yup
    .string()
    .required()
    .label('Name'),
  comment: yup.string().required(),
  accept: yup
    .boolean()
    .required()
    .test('bol', 'You should accept T&C to continue', value => {
      return value ? true : false;
    })
});

export { FAQFormValidationSchema };
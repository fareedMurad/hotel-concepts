import * as yup from 'yup';
import { ContactUsFormValues } from '@app/models';
/**
 * Contacts us validation schema
 */
const ContactsUsValidationSchema = yup.object<ContactUsFormValues>().shape({
  subject: yup
    .string()
    .required()
    .label('Subject'),
  email: yup
    .string()
    .email()
    .required()
    .label('Email'),
  title: yup
    .string()
    .required()
    .label('Title'),
  name: yup
    .string()
    .required()
    .label('Name'),
  surname: yup
    .string()
    .required()
    .label('Surname'),
  comment: yup
    .string()
    .label('Message')
    .required()
});

export { ContactsUsValidationSchema };

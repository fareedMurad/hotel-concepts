import * as yup from 'yup';
import { ConsultRequestFormValues } from '@app/models';

/**
 * Consult request validation schema
 */

const ConsultRequestValidationSchema = yup
  .object<ConsultRequestFormValues>()
  .shape({
    name: yup
      .string()
      .required()
      .label('Name'),
    email: yup
      .string()
      .email()
      .required()
      .label('Email'),
    website: yup
      .string()
      .label('Website')
      .required(),
    teamSize: yup
      .string()
      .label('Name')
      .required(),
    interests: yup
      .string()
      .label('Name')
      .required()
  });

export { ConsultRequestValidationSchema };

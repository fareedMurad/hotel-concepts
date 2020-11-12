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
      .label('Full Name'),
    email: yup
      .string()
      .email()
      .required()
      .label('Email'),
    website: yup
      .string()
      .label('Company Name')
      .required(),
    teamSize: yup
      .string()
      .label('Team size')
      .required(),
    interests: yup
      .string()
      .label('Interests')
      .required()
  });

export { ConsultRequestValidationSchema };

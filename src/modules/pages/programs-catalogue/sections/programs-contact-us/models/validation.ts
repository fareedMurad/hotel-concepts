import * as yup from 'yup';
import { ConsultRequestFormValues } from '@app/models';

/**
 * Program contact us validation schema
 */

const ProgramContacUsValidationSchema = yup
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

export { ProgramContacUsValidationSchema };

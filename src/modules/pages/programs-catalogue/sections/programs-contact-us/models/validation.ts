import * as yup from 'yup';
import { ConsultRequestFormValues } from '@app/models';

/**
 * Program contact us validation schema
 */

const ProgramContacUsValidationSchema: yup.SchemaOf<ConsultRequestFormValues> = yup
  .object()
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
      .label('Employees')
      .required(),
    interests: yup
      .string()
      .label('Interests')
      .required()
  });

export { ProgramContacUsValidationSchema };

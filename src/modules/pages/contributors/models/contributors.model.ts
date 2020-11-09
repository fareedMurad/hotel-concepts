import { ContributorsApplyValues } from './../../../app/models/form';
import * as yup from 'yup';

const contributorsApplyValidationSchema = yup
  .object<ContributorsApplyValues>()
  .shape({
    name: yup
      .string()
      .label('Name*')
      .required(),
    specialization: yup
      .string()
      .label('Specialization*')
      .required(),
    linkedIn: yup
      .string()
      .label('LinkedIn profile*')
      .required(),
    email: yup
      .string()
      .email()
      .label('Contact e-mail*')
      .required(),
    message: yup.string()
  });

export { contributorsApplyValidationSchema };

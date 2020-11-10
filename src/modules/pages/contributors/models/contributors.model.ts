import * as yup from 'yup';
import { ContributorsApplyValues } from './../../../app/models/form';

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
    linkedInUrl: yup
      .string()
      .label('LinkedIn profile*')
      .required()
      .test('match', 'LinkedIn link is not correct', value => {
        if (value) {
          return value.includes('linkedin.com/in/') ? true : false;
        }
      }),
    email: yup
      .string()
      .email()
      .label('Contact e-mail*')
      .required(),
    comment: yup.string().required()
  });

export { contributorsApplyValidationSchema };

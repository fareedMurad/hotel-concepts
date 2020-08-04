import * as yup from 'yup';

type contributorsApplyValues = {
  name: string;
  specialization: string;
  linkedIn: string;
  email: string;
  message: string;
};

const contributorsApplyValidationSchema = yup
  .object<contributorsApplyValues>()
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

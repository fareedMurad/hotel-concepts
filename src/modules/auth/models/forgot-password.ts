import * as yup from 'yup';

/**
 * Reset Password Form Values
 */
type ForgotPasswordValues = {
  email: string;
};

/**
 * Reset Password Validation Schema
 */
const forgotPasswordValidationSchema: yup.SchemaOf<ForgotPasswordValues> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .label('Email')
      .required('Email is a required field')
  });

export { ForgotPasswordValues, forgotPasswordValidationSchema };

import * as yup from 'yup';

/**
 * Reset Password Form Values
 */
type ResetPasswordValues = {
  email: string;
};

/**
 * Reset Password Validation Schema
 */
const resetPasswordValidationSchema = yup.object().shape<ResetPasswordValues>({
  email: yup
    .string()
    .email('Email is not valid')
    .label('Email')
    .required('Email is a required field')
});

export { ResetPasswordValues, resetPasswordValidationSchema };

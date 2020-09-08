import * as yup from 'yup';

/**
 * Reset Password Form Values
 */
type ResetPasswordValues = {
  password: string;
};

/**
 * Reset Password Validation Schema
 */
const resetPasswordValidationSchema = yup.object().shape<ResetPasswordValues>({
  password: yup
    .string()
    .min(6)
    .label('New Password')
    .required('New Password is a required field')
});

export { ResetPasswordValues, resetPasswordValidationSchema };

import * as yup from 'yup';

/**
 * Reset Password Form Values
 */
type ResetPasswordValues = {
  password: string;
  confirmPassword: string;
};

/**
 * Reset Password Validation Schema
 */
const resetPasswordValidationSchema = yup.object().shape<ResetPasswordValues>({
  password: yup
    .string()
    .min(6)
    .label('New Password')
    .required('New Password is a required field'),
  confirmPassword: yup
    .string()
    .min(6)
    .label('Confirm Password')
    .test(
      'match',
      () => 'Passwords don`t match',
      function(password) {
        return this.parent.password == password;
      }
    )
});

export { ResetPasswordValues, resetPasswordValidationSchema };

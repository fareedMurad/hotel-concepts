import * as yup from 'yup';

/**
 * Update Password Model
 */
type UpdatePasswordModel = {
  email: string;
  newPassword: string;
  newPasswordConfirm?: string;
};

/**
 * Update password validation schema
 */
const updatePasswordValidationSchema = yup.object().shape<UpdatePasswordModel>({
  email: yup
    .string()
    .label('Email')
    .email()
    .required('Email is a required field'),
  newPassword: yup
    .string()
    .min(6, 'Password should be at least 6 charachters long')
    .label('New password')
    .required('New password is a required field'),
  newPasswordConfirm: yup
    .string()
    .min(6, 'Password should be at least 6 charachters long')
    .label('Password confirmation')
    .required('Password confirmation is a required field')
    .test(
      'match',
      () => 'Passwords don`t match',
      function(password) {
        return this.parent.newPassword == password;
      }
    )
});

export { UpdatePasswordModel, updatePasswordValidationSchema };

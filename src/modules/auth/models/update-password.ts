import * as yup from 'yup';

/**
 * Update Password Form Values
 */
type UpdatePasswordValues = {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm?: string;
};

/**
 * Update Password Validation Schema
 */
const updatePasswordValidationSchema = yup
  .object()
  .shape<UpdatePasswordValues>({
    oldPassword: yup
      .string()
      .label('Current Password')
      .required('Current Password is a required field'),
    newPassword: yup
      .string()
      .min(6)
      .label('New password')
      .required('New password is a required field'),
    newPasswordConfirm: yup
      .string()
      .min(6)
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

export { UpdatePasswordValues, updatePasswordValidationSchema };

import * as React from 'react';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Field, Button } from '@core/components';
import {
  UpdatePasswordValues,
  updatePasswordValidationSchema
} from '@auth/models';
import { updatePassword } from '@app/redux/auth';

/**
 * Default values
 */
const defaultValues: UpdatePasswordValues = {
  currentPassword: '',
  newPassword: '',
  newPasswordConfirm: ''
};

/**
 * Renders UpdatePassword
 */
const UpdatePassword: React.FC<UpdatePasswordProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={updatePasswordValidationSchema}
      onSubmit={values => {
        dispatch(updatePassword(values));
      }}
    >
      {({ handleSubmit }) => (
        <div className={styles.updatePassword}>
          <Field.Text name='currentPassword' label='Current password' />
          <Field.Text name='newPassword' label='New password' />
          <Field.Text name='newPasswordConfirm' label='Repeat new password' />
          <Button onClick={() => handleSubmit()}>Update</Button>
        </div>
      )}
    </Formik>
  );
};

export { UpdatePassword };

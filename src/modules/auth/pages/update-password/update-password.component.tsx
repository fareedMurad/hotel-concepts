import * as React from 'react';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import {
  UpdatePasswordValues,
  updatePasswordValidationSchema
} from '@auth/models';
import { updatePassword } from '@app/redux/auth';
import { Preloaders } from '@ui/models';

/**
 * Default values
 */
const defaultValues: UpdatePasswordValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: ''
};

/**
 * Renders UpdatePassword
 */
const UpdatePassword: React.FC<UpdatePasswordProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.updatePassword}>
      <Preloader id={Preloaders.updatePassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={values => {
            dispatch(updatePassword(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Text name='oldPassword' label='Current password' />
              <Field.Text name='newPassword' label='New password' />
              <Field.Text
                name='newPasswordConfirm'
                label='Repeat new password'
              />
              <Button onClick={() => handleSubmit()}>Update</Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { UpdatePassword };

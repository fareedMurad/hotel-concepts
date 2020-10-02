import * as React from 'react';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Field, Button, Preloader, FormNew } from '@core/components';
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
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Text
                className={styles.input}
                name='oldPassword'
                label='Current password'
                type='password'
              />
              <Field.Text
                className={styles.input}
                name='newPassword'
                type='password'
                label='New password'
              />
              <Field.Text
                className={styles.input}
                name='newPasswordConfirm'
                label='Repeat new password'
                type='password'
              />
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Update
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { UpdatePassword };

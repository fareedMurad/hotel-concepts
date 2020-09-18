import * as React from 'react';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';
import { Formik } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import {
  UpdatePasswordValues,
  updatePasswordValidationSchema
} from '@auth/models';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '@app/redux/auth';
import { Preloaders } from '@ui/models';
import { State } from '@app/redux/state';

const defaultValues: UpdatePasswordValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: ''
};
/**
 * Renders EmailPassword
 */
const UpdatePassword: React.FC<UpdatePasswordProps> = ({}) => {
  const { updatePasswordSuccess } = useSelector(
    (state: State) => state.account
  );
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className={styles.title}>Email & Password</div>
      <div className={styles.hint}>
        Change your email address and password here. Please remember to use your
        new login details when next visiting <span>Kordie.</span>
      </div>
      <Formik
        initialValues={defaultValues}
        validationSchema={updatePasswordValidationSchema}
        onSubmit={values => {
          dispatch(updatePassword(values));
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div className={styles.form}>
            <Field.Text
              name='oldPassword'
              label='Old password'
              type='password'
            />
            <Field.Text
              name='newPassword'
              label='New password'
              type='password'
            />
            <Field.Text
              name='newPasswordConfirm'
              label='Retype new password'
              type='password'
            />
            <div style={{ position: 'relative' }}>
              <Button
                className={styles.formSubmit}
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
              >
                {updatePasswordSuccess ? 'Saved' : 'Save'}
              </Button>
              <Preloader
                className={styles.preloader}
                id={Preloaders.updatePassword}
                size={20}
                thickness={5}
              />
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { UpdatePassword };

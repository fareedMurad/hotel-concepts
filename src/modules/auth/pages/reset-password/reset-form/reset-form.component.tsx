import { resetPassword } from '@app/redux/auth';
import { resetPasswordValidationSchema } from '@auth/models';
import { Button, Field, FormNew } from '@core/components';
import { Formik } from 'formik';
import { values } from 'puppeteer/DeviceDescriptors';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ResetFormProps } from './reset-form.props';
import * as styles from './reset-form.scss';

/**
 * default values
 */

const defaultValues = {
  password: '',
  confirmPassword: ''
};
/**
 * Renders ResetForm
 */
const ResetForm: React.FC<ResetFormProps> = ({ token }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.resetForm}>
      <div className={styles.title}>Reset your Kordie password</div>
      <div className={styles.divider} />
      <Formik
        initialValues={defaultValues}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={values => {
          dispatch(resetPassword({ password: values.password, token: token }));
        }}
      >
        {({ handleSubmit }) => (
          <FormNew className={styles.form} handleSubmit={handleSubmit}>
            <Field.Text
              className={styles.formField}
              theme='secondary'
              name='password'
              label='New Password'
              type='password'
              placeholder='Enter new password'
            />
            <Field.Text
              className={styles.formField}
              theme='secondary'
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              placeholder='Repeat new password'
            />
            <Button
              className={styles.submit}
              arrow
              onClick={() => handleSubmit()}
            >
              Reset Password
            </Button>
          </FormNew>
        )}
      </Formik>
    </div>
  );
};

export { ResetForm };

import { resetPassword } from '@app/redux/auth';
import { PasswordChangedModal } from '@auth/modals/password-changed-modal';
import { ResetPasswordValues } from '@auth/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { EmailSent } from './email-sent';
import { useResetPasswordData } from './reset-password.hook';
import * as styles from './reset-password.scss';

/**
 * Default Values
 */
const defaultValues: ResetPasswordValues = {
  password: ''
};

/**
 * Renders ResetPassword
 */
const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useResetPasswordData();

  return (
    <div className={styles.resetPassword}>
      <EmailSent />

      {/* <Preloader id={Preloaders.resetPassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={values => {
            dispatch(resetPassword({ values, token }));
          }}
        >
          {({ handleSubmit }) => (
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Text
                className={styles.input}
                name='password'
                label='New password'
                type='password'
              />
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Submit
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader> */}
      <PasswordChangedModal />
    </div>
  );
};

export { ResetPassword };

import { login } from '@app/redux/auth';
import { ForgotPasswordModal } from '@auth/modals/forgot-password-modal';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { Button, Field, FormNew } from '@core/components';
import { navigate } from '@router/store';
import { closeModal, showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ModalLoginProps } from './modal-login.props';
import * as styles from './modal-login.scss';

/**
 * Default Values
 */
const defaultValues: LoginValues = {
  email: '',
  password: '',
  agreement: false
};

/**
 * Renders ModalLogin
 */
const ModalLogin: React.FC<ModalLoginProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.modalLogin}>
      <Formik
        initialValues={defaultValues}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          dispatch(login({ data: values, from: '/cart' }));
        }}
      >
        {({ handleSubmit }) => (
          <FormNew className={styles.form} handleSubmit={handleSubmit}>
            <Field.Text name='email' label='Email' className={styles.input} />
            <Field.Text
              name='password'
              label='Password'
              type='password'
              className={styles.input}
            />
            <Field.Checkbox
              name='agreement'
              className={styles.agreement}
              errorClassname={styles.agreementError}
              label={() => (
                <div className={styles.agreementLabel}>
                  By clicking Sign In, you agree to our{' '}
                  <span className={styles.agreementLabelBold}>
                    Terms of Use
                  </span>{' '}
                  and our{' '}
                  <span className={styles.agreementLabelBold}>
                    Privacy Policy
                  </span>
                </div>
              )}
            />
            <Button
              className={styles.submit}
              onClick={() => handleSubmit()}
              arrow
            >
              Sign In
            </Button>
          </FormNew>
        )}
      </Formik>

      <div className={styles.modalFooter}>
        <div
          className={styles.forgotPassword}
          onClick={() => {
            dispatch(showModal(Modals.forgotPassword));
          }}
        >
          Forgot your password?
        </div>
        <div className={styles.signUp}>
          Need an account?
          <span
            className={styles.signUpLink}
            onClick={() => {
              dispatch(closeModal(Modals.registration));
              dispatch(navigate('/auth/register'));
            }}
          >
            Sign Up
          </span>
        </div>
      </div>
      <ForgotPasswordModal />
    </div>
  );
};

export { ModalLogin };

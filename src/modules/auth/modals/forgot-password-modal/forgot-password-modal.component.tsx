import { forgotPassword } from '@app/redux/auth';
import { State } from '@app/redux/state';
import {
  forgotPasswordValidationSchema,
  ForgotPasswordValues
} from '@auth/models';
import { Button, Field, Modal, Preloader } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForgotPasswordModalProps } from './forgot-password-modal.props';
import * as styles from './forgot-password-modal.scss';

/**
 * Default Values
 */
const defaultValues: ForgotPasswordValues = {
  email: ''
};

/**
 * Renders ForgotPasswordModal
 */
const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({}) => {
  const dispatch = useDispatch();
  const { passwordRecoverySent } = useSelector((state: State) => state.auth);

  return (
    <Modal id={Modals.forgotPassword} withOverlay={false}>
      <div className={styles.forgotPasswordModal}>
        <Preloader id={Preloaders.forgotPassword}>
          {!passwordRecoverySent ? (
            <Formik
              initialValues={defaultValues}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={values => {
                dispatch(forgotPassword(values));
              }}
            >
              {({ handleSubmit }) => (
                <Fragment>
                  <div className={styles.title}>Reset your password</div>
                  <div className={styles.content}>
                    <div className={styles.description}>
                      Please provide the e-mail address you used when you signed
                      up for Kordie account.
                    </div>
                    <Field.Text
                      className={styles.input}
                      name='email'
                      label='Email'
                    />
                    <Button
                      className={styles.submit}
                      onClick={() => handleSubmit()}
                      arrow
                    >
                      Send e-mail
                    </Button>
                    <div className={styles.back}>
                      <span>Remeber your password?</span>
                      <span
                        className={styles.backLink}
                        onClick={() =>
                          dispatch(closeModal(Modals.forgotPassword))
                        }
                      >
                        Log In
                      </span>
                    </div>
                  </div>
                </Fragment>
              )}
            </Formik>
          ) : (
            <div className={styles.success}>
              <div className={styles.successCaption}>
                We have sent you an email to update your password
              </div>
            </div>
          )}
        </Preloader>
      </div>
    </Modal>
  );
};

export { ForgotPasswordModal };

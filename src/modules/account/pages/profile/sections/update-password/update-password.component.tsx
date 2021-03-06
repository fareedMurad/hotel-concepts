import { Card } from '@account/components';
import { editPasswordAndEmail } from '@app/redux/account';
import { Button, Field, FormNew, Preloader } from '@core/components';
import { capitalize } from '@core/shared';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updatePasswordValidationSchema } from '../../models';
import { useUpdatePasswordData } from './update-password.hook';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';

/**
 * Renders UpdatePassword
 */
const UpdatePassword: React.FC<UpdatePasswordProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { isInternalSource, defaultValues, source } = useUpdatePasswordData();

  return (
    <Card
      className={classNames(styles.updatePassword, className)}
      title='Email & Password'
    >
      <Preloader id={Preloaders.profileUpdatePassword} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={values => {
            dispatch(
              editPasswordAndEmail({
                password: values.newPassword,
                email: values.email
              })
            );
          }}
        >
          {({ handleSubmit }) => (
            <Fragment>
              <div className={styles.hint}>
                Change your email address and password here.Please remember to
                use your new login details when next visiting{' '}
                <span className={styles.hintBold}>Kordie.</span>
              </div>
              <FormNew className={styles.form} handleSubmit={handleSubmit}>
                <Field.Text
                  name='email'
                  label='E-mail'
                  disabled={!isInternalSource}
                />
                <Field.Text
                  name='newPassword'
                  label='New password'
                  type='password'
                  disabled={!isInternalSource}
                />
                <Field.Text
                  name='newPasswordConfirm'
                  label='Retype new password'
                  type='password'
                  disabled={!isInternalSource}
                />
                {!isInternalSource && (
                  <div className={styles.hint}>
                    You're logged in with your {capitalize(source)} account,
                    password cannot be changed
                  </div>
                )}
                <Button
                  className={styles.submit}
                  onClick={() => handleSubmit()}
                  disabled={!isInternalSource}
                >
                  Save
                </Button>
              </FormNew>
            </Fragment>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { UpdatePassword };

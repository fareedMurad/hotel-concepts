import { Card } from '@account/components';
import { updatePassword } from '@app/redux/account';
import { Button, Field, Preloader } from '@core/components';
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
  const { isInternalSource, defaultValues } = useUpdatePasswordData();

  return (
    <Card
      className={classNames(styles.updatePassword, className)}
      title='Email & Password'
      offsetTop={30}
    >
      <Preloader id={Preloaders.profileUpdatePassword} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={values => {
            dispatch(updatePassword(values.newPassword));
          }}
        >
          {({ handleSubmit }) => (
            <Fragment>
              <div className={styles.hint}>
                Change your email address and password here.Please remember to
                use your new login details when next visiting Kordie.
              </div>
              <div className={styles.form}>
                <Field.Text name='email' label='E-mail' />
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
                <Button
                  className={styles.submit}
                  onClick={() => handleSubmit()}
                >
                  Save
                </Button>
              </div>
            </Fragment>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { UpdatePassword };

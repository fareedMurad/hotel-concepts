import { Card } from '@account/components';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdatePasswordData } from './update-password.hook';
import { UpdatePasswordProps } from './update-password.props';
import * as styles from './update-password.scss';
import { updatePasswordValidationSchema } from '../../models';

/**
 * Renders UpdatePassword
 */
const UpdatePassword: React.FC<UpdatePasswordProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { defaultValues } = useUpdatePasswordData();

  return (
    <Card
      className={classNames(styles.updatePassword, className)}
      title='Email & Password'
      offsetTop={30}
    >
      <Preloader id={Preloaders.profileUpdatePassword}>
        <Formik
          initialValues={defaultValues}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={values => {
            console.log(values);
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
                <Field.Text name='email' label='New password' />
                <Field.Text name='email' label='Retype new password' />
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

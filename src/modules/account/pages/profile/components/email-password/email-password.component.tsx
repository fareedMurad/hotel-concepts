import * as React from 'react';
import { EmailPasswordProps } from './email-password.props';
import * as styles from './email-password.scss';
import { Formik } from 'formik';
import { Field, Button } from '@core/components';

const defaultValues = {
  email: '',
  password: '',
  repeatedPassword: ''
};
/**
 * Renders EmailPassword
 */
const EmailPassword: React.FC<EmailPasswordProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Email & Password</div>
      <div className={styles.hint}>
        Change your email address and password here. Please remember to use your
        new login details when next visiting <span>Kordie.</span>
      </div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <div className={styles.form}>
            <Field.Text name='email' label='E-mail' />
            <Field.Text name='password' label='New password' />
            <Field.Text name='repeatedPassword' label='Retype new password' />
            <Button
              className={styles.formSubmit}
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { EmailPassword };

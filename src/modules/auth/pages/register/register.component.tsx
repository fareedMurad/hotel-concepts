import * as React from 'react';
import { useRegisterData } from './register.hook';
import * as styles from './register.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Field, Button, Preloader } from '@core/components';
import { RegisterValues, registerValidationSchema } from '@auth/models';
import { register } from '@app/redux/auth';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Sso } from '@auth/components';
import { Fragment } from 'react';

/**
 * Default Values
 */
const defaultValues: RegisterValues = {
  name: '',
  surname: '',
  company: '',
  job: '',
  country: '',
  city: '',
  phone: '',
  email: '',
  password: ''
};

/**
 * Renders Register
 */
const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { registered } = useRegisterData();

  return (
    <div className={styles.register}>
      <Preloader id={Preloaders.register}>
        {!registered ? (
          <Fragment>
            <Formik
              initialValues={defaultValues}
              validationSchema={registerValidationSchema}
              onSubmit={values => {
                dispatch(register(values));
              }}
            >
              {({ handleSubmit }) => (
                <div className={styles.form}>
                  <Field.Text name='name' label='Name' />
                  <Field.Text name='surname' label='Surname' />
                  <Field.Text name='company' label='Company' />
                  <Field.Text name='job' label='Job' />
                  <Field.Text name='country' label='Country' />
                  <Field.Text name='city' label='City' />
                  <Field.Text name='phone' label='Phone' />
                  <Field.Text name='email' label='Email' />
                  <Field.Text name='password' label='Password' />
                  <Button onClick={() => dispatch(navigate('/auth/login'))}>
                    Login
                  </Button>
                  <Button onClick={() => handleSubmit()}>Register</Button>
                </div>
              )}
            </Formik>
            <Sso />
          </Fragment>
        ) : (
          <div className={styles.success}>
            <div className={styles.successCaption}>
              You have successfully registered. We have sent you an email to
              confirm your email address.
            </div>
          </div>
        )}
      </Preloader>
    </div>
  );
};

export { Register };

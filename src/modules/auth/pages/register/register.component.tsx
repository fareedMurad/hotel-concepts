import * as React from 'react';
import { RegisterProps } from './register.props';
import * as styles from './register.scss';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Field, Button } from '@core/components';
import { RegisterValues, registerValidationSchema } from '@auth/models';
import { register } from '@app/redux/auth';
import { navigate } from '@router/store';

/**
 * Default Values
 */
const defaultValues: RegisterValues = {
  email: '',
  password: ''
};

/**
 * Renders Register
 */
const Register: React.FC<RegisterProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={registerValidationSchema}
      onSubmit={values => {
        dispatch(register(values));
      }}
    >
      {({ handleSubmit }) => (
        <div className={styles.register}>
          <Field.Text name='email' label='Email' />
          <Field.Text name='password' label='Password' />
          <Button onClick={() => dispatch(navigate('/auth/login'))}>
            Login
          </Button>
          <Button onClick={() => handleSubmit()}>Register</Button>
        </div>
      )}
    </Formik>
  );
};

export { Register };

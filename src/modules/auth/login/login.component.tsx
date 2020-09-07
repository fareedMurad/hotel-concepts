import * as React from 'react';
import { LoginProps } from './login.props';
import * as styles from './login.scss';
import { Formik } from 'formik';
import { loginValidationSchema, LoginValues } from '@auth/models';
import { useDispatch } from 'react-redux';
import { Field, Button } from '@core/components';
import { login } from '@app/redux/auth';

/**
 * Default Values
 */
const defaultValues: LoginValues = {
  email: '',
  password: ''
};

/**
 * Renders Login
 */
const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={loginValidationSchema}
      onSubmit={values => {
        dispatch(login(values));
      }}
    >
      {({ handleSubmit }) => (
        <div className={styles.login}>
          <Field.Text name='email' label='Email' />
          <Field.Text name='password' label='Password' />
          <Button onClick={() => handleSubmit()}>Login</Button>
        </div>
      )}
    </Formik>
  );
};

export { Login };

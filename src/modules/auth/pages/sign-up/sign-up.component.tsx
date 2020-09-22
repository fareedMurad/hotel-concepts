import { ScrollToTop } from '@app';
import { register } from '@app/redux/auth';
import { State } from '@app/redux/state';
import { AuthHeader } from '@auth/components';
import { registerValidationSchema, RegisterValues } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpData } from './sign-up.props';
import * as styles from './sign-up.scss';

/**
 * Renders Login
 */
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { defaultValues, positionData, titleData } = useSignUpData();
  const { registered } = useSelector((state: State) => state.auth);

  if (registered) {
    return (
      <div className={styles.successHint}>
        Please check your email to verify your account
      </div>
    );
  }

  return (
    <div className={styles.signUp}>
      <ScrollToTop />
      <Preloader id={Preloaders.register}>
        <AuthHeader />

        <Formik
          initialValues={defaultValues}
          validationSchema={registerValidationSchema}
          onSubmit={values => {
            dispatch(register(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.formFields}>
              <Field.Radio
                name='title'
                data={titleData}
                label='Title'
                className={styles.formFieldsRadioTitles}
                direction='row'
              />
              <Field.Text
                className={styles.formFieldsInput}
                name='name'
                label='First Name'
              />
              <Field.Text
                className={styles.formFieldsInput}
                name='surname'
                label='Last Name'
              />

              <Field.Radio
                name='position'
                data={positionData}
                label='I am'
                className={styles.formFieldsRadioIam}
                direction='column'
              />

              <Field.Text
                className={styles.formFieldsInput}
                name='email'
                label='Email'
              />
              <Field.Text
                className={styles.formFieldsInput}
                name='password'
                label='Password'
                type='password'
              />
              <Field.Checkbox
                className={styles.formFieldsAccept}
                name='newsSub'
                label='Keep me up to date on class event and new releases'
              />
              <div className={styles.formFieldsHintText}>
                By clicking Sign Up, you agree to our <span>Terms of Use</span>{' '}
                and our <span>Privacy Policy</span>
              </div>
              <Button
                className={styles.formFieldsSubmit}
                arrow='→'
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { SignUp };

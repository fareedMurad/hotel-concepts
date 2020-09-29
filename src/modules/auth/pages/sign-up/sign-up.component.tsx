import { ScrollToTop } from '@app';
import { register } from '@app/redux/auth';
import { State } from '@app/redux/state';
import { AuthHeader } from '@auth/components';
import { registerValidationSchema } from '@auth/models';
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
            <div className={styles.form}>
              <Field.RadioGroup
                className={styles.title}
                listClassname={styles.titleList}
                radioClassname={styles.titleRadio}
                name='title'
                label='Title'
                data={titleData}
              />
              <Field.Text
                className={styles.field}
                name='name'
                label='First Name'
              />
              <Field.Text
                className={styles.field}
                name='surname'
                label='Last Name'
              />
              <Field.RadioGroup
                className={styles.position}
                listClassname={styles.positionList}
                labelClassname={styles.positionLabel}
                radioClassname={styles.positionRadio}
                name='position'
                label='I am'
                direction='column'
                data={positionData}
              />
              <Field.Text className={styles.field} name='email' label='Email' />
              <Field.Text
                className={styles.field}
                name='password'
                label='Password'
                type='password'
              />
              <Field.Checkbox
                className={styles.accept}
                labelClassname={styles.acceptLabel}
                name='newsSub'
                label='Keep me up to date on class event and new releases'
              />
              <div className={styles.hint}>
                By clicking Sign Up, you agree to our{' '}
                <span className={styles.hintBold}>Terms of Use</span> and our{' '}
                <span className={styles.hintBold}>Privacy Policy</span>
              </div>
              <Button
                className={styles.submit}
                arrow
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

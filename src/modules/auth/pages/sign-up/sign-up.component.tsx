import { login, register } from '@app/redux/auth';
import { Sso } from '@auth/components';
import { RegisterValues, registerValidationSchema } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SignUpProps } from './sign-up.props';
import * as styles from './sign-up.scss';
import { NavLink } from 'react-router-dom';

/**
 * Default Values
 */
const defaultValues: RegisterValues = {
  title: '',
  position: '',
  name: '',
  surname: '',
  email: '',
  password: '',
  newsSub: false
};

/**
 * Renders Login
 */
const SignUp: React.FC<SignUpProps> = ({}) => {
  const dispatch = useDispatch();
  const radioTitleData = [
    {
      id: '3r32323e3r',
      caption: 'Ms.'
    },
    {
      id: '3rfdsv52',
      caption: 'Mr.'
    }
  ];
  const radioIAMData = [
    {
      id: 'askocxim3',
      caption: 'Hospitality professional'
    },
    {
      id: 'asdve33',
      caption: 'Hospitality student'
    },
    {
      id: 'askoasd534cxim3',
      caption: 'Want to switch to hospitality'
    },
    {
      id: 'asd0k5g5',
      caption: 'Other'
    }
  ];

  return (
    <div className={styles.signUp}>
      <Preloader id={Preloaders.register}>
        <div className={styles.form}>
          <div className={styles.formTitles}>
            <NavLink
              activeClassName={styles.formTitlesActive}
              to={'/auth/register'}
            >
              Sign up
            </NavLink>
            <NavLink to={'/auth/login'}>Sign in</NavLink>
          </div>
          <div className={styles.formDescription}>
            <div className={styles.formDescriptionSubtitle}>
              Create your account
            </div>
            <div className={styles.formDescriptionText}>
              Build skills for today, tomorrow, anf beyond.Education to
              future-proof your career
            </div>
          </div>
          <Sso className={styles.socials} />
          <div className={styles.separator}>
            <span className={styles.separatorLine} /> <span>Or</span>
            <span className={styles.line} />
          </div>
          <Formik
            initialValues={defaultValues}
            validationSchema={registerValidationSchema}
            onSubmit={values => {
              dispatch(register(values));
              console.log(values);
            }}
          >
            {({ handleSubmit }) => (
              <div className={styles.formFields}>
                <Field.Radio
                  name='title'
                  data={radioTitleData}
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
                  data={radioIAMData}
                  label='I AM'
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
                  By clicking Sign Up, you agree to our{' '}
                  <span>Terms of Use</span> and our <span>Privacy Policy</span>
                </div>
                <Button
                  className={styles.formFieldsSubmit}
                  arrow='→'
                  onClick={() => handleSubmit()}
                >
                  Sign Up
                </Button>

                <div
                  className={styles.forgotPassword}
                  onClick={() => dispatch(navigate('/auth/forgot-password'))}
                >
                  Forgot password?
                </div>
              </div>
            )}
          </Formik>
        </div>
      </Preloader>
    </div>
  );
};

export { SignUp };

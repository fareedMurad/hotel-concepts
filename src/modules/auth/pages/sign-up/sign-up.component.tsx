import { register } from '@app/redux/auth';
import { RegisterValues, registerValidationSchema } from '@auth/models';
import { Button, Field, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpProps } from './sign-up.props';
import * as styles from './sign-up.scss';
import { SignInSignUpHeader } from '../components/sign-in-sign-up-header';
import { ScrollToTop } from '@app';
import { State } from '@app/redux/state';

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
  const { registered } = useSelector((state: State) => state.auth);
  console.log(registered);
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
        <SignInSignUpHeader title='Create your account' />
        <Formik
          initialValues={defaultValues}
          validationSchema={registerValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, actions) => {
            actions.validateForm(values);
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
                onClick={() => {
                  handleSubmit();
                  scrollTo(0, 0);
                }}
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

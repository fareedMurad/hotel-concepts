import { register } from '@app/redux/auth';
import { registerValidationSchema } from '@auth/models';
import { useSignUpData } from '@auth/pages/sign-up/sign-up.hook';
import { FormNew, Button, Field } from '@core/components';
import { defaultValues } from '@pages/program-page/components/contact-us-modal/models/contact-us-modal.model';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ModalSignupProps } from './modal-signup.props';
import * as styles from './modal-signup.scss';

/**
 * Renders ModalSignup
 */
const ModalSignup: React.FC<ModalSignupProps> = ({}) => {
  const dispatch = useDispatch();
  const { defaultValues, positionData, titleData } = useSignUpData();
  return (
    <div className={styles.modalSignup}>
      <Formik
        initialValues={defaultValues}
        validationSchema={registerValidationSchema}
        onSubmit={values => {
          dispatch(register(values));
        }}
      >
        {({ handleSubmit }) => (
          <FormNew className={styles.form} handleSubmit={handleSubmit}>
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
              type='submit'
              arrow
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
          </FormNew>
        )}
      </Formik>
    </div>
  );
};

export { ModalSignup };

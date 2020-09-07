import { Field } from '@core/components';
import { Formik } from 'formik';
import * as React from 'react';
import { Section } from '../../components';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { profile } = useProfileData();

  return (
    <div className={styles.profile}>
      <Formik
        initialValues={profile}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <div className={styles.form}>
            <Section title='Language'>
              <Field.Text name='language' label='Language' />
            </Section>
            <Section title='Avatar'>
              <Field.Text name='image' type='file' />
            </Section>
            <Section title='Email and Password'>
              <Field.Text name='email' label='Email address' />
              <Field.Text name='password' label='Password' />
              <Field.Text name='repeatPassword' label='Repeat password' />
            </Section>
            <Section title='Contact address'>
              <Field.Text name='title' label='Title' />
              <Field.Text name='firstName' label='First Name' />
              <Field.Text name='lastName' label='Last Name' />
              <Field.Text name='company' label='Company' />
              <Field.Text name='jobTitle' label='Job Title' />
              <Field.Text name='city' label='City' />
              <Field.Text name='country' label='Country' />
              <Field.Text name='phone' label='Phone' />
            </Section>
            <Section title='Privacy'>
              <div className={styles.privacy}>
                By using our service, you agree to our privacy policy. For more
                information, contact info@kordie.com.
              </div>
            </Section>
          </div>
        )}
      </Formik>
    </div>
  );
};

export { Profile };

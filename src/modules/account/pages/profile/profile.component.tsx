import * as React from 'react';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';
import { ProfileValues } from '../../models';
import { Formik } from 'formik';
import { Field } from '@core/components';
import { Section } from '../../components';
import { useDispatch } from 'react-redux';
import { uploadAvatar } from '@app/redux/account';
import { Avatar } from '@core/components/avatar';

/**
 * Default values
 */
const defaultValues: ProfileValues = {
  language: '',
  email: '',
  password: '',
  repeatPassword: '',
  title: '',
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  city: '',
  country: '',
  phone: ''
};

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const {} = useProfileData();
  const dispatch = useDispatch();

  return (
    <div className={styles.profile}>
      <Formik
        initialValues={defaultValues}
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
              <Avatar width={100} height={100} >
                <input
                  className={styles.uploadAvatar}
                  id='avatar'
                  name='image'
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  onChange={event => {
                    const {
                      target: { files }
                    } = event;
                    dispatch(uploadAvatar(files[0]));
                  }}
                />
                <label htmlFor='avatar'>
                  <span>upload</span>{' '}
                </label>
              </Avatar>
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
          </div>
        )}
      </Formik>
    </div>
  );
};

export { Profile };

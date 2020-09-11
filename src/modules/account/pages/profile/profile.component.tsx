import { Section } from '@account/components';
import { editProfile } from '@app/redux/account';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';
import { UploadAvatar } from './upload-avatar';
import { profileValidationSchema } from '@account/models';

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { user, defaultValues } = useProfileData();
  const { name, surname, avatar } = user || {};
  const dispatch = useDispatch();

  return (
    <div className={styles.profile}>
      <Preloader id={Preloaders.profile}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={profileValidationSchema}
          onSubmit={values => {
            dispatch(editProfile(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Section title='Language'>
                <Field.Text name='language' label='Language' />
              </Section>
              <Section title='Avatar'>
                <UploadAvatar user={{ name, surname, src: avatar }} />
              </Section>
              <Section title='Email and Password'>
                <Field.Text name='email' label='Email address' />
                <Field.Text name='password' label='Password' />
                <Field.Text name='repeatPassword' label='Repeat password' />
              </Section>
              <Section title='Contact address'>
                <Field.Text name='title' label='Title' />
                <Field.Text name='name' label='First Name' />
                <Field.Text name='surname' label='Last Name' />
                <Field.Text name='company' label='Company' />
                <Field.Text name='job' label='Job Title' />
                <Field.Text name='city' label='City' />
                <Field.Text name='country' label='Country' />
                <Field.Text name='phone' label='Phone' />
              </Section>
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save changes
              </Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </div>
  );
};

export { Profile };

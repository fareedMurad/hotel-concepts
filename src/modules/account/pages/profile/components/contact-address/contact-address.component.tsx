import * as React from 'react';
import { ContactAddressProps } from './contact-address.props';
import * as styles from './contact-address.scss';
import { useProfileData } from '../../profile.hook';
import { Formik } from 'formik';
import { Select, Field, Button, Form, Preloader } from '@core/components';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from 'os';
import { editProfile } from '@app/redux/account';
import { ProfileValues } from '@account/models';
import { Preloaders } from '@ui/models/preloader';
import { relative } from 'path';
import { State } from '@app/redux/state';
import { contactAddressValidationSchema } from '@auth/models/contanct-address';

/**
 * Radio title data
 */
const titleData = [
  { value: 'ms', label: 'Ms.' },
  { value: 'mr', label: 'Mr.' }
];

/**
 * Radio position data
 */
const positionData = [
  { value: 'hospitalityProfessional', label: 'Hospitality professional' },
  { value: 'hospitalityProfessional', label: 'Hospitality student' },
  {
    value: 'hospitalitySwitch',
    label: 'Want to switch to hospitality'
  },
  { value: 'other', label: 'Other' }
];

/**
 * Renders ContactAddress
 */
const ContactAddress: React.FC<ContactAddressProps> = ({}) => {
  const dispatch = useDispatch();
  const { user, defaultValues } = useProfileData();
  const { editProfileSuccess } = useSelector((state: State) => state.account);

  return (
    <React.Fragment>
      <div className={styles.title}>Contact address</div>

      <Formik
        initialValues={defaultValues}
        validationSchema={contactAddressValidationSchema}
        onSubmit={values => {
          console.log(values);
          dispatch(editProfile(values));
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div className={styles.form}>
            <Field.Select
              placeholder={user.title}
              name='title'
              options={titleData}
              className={styles.formTitleSelect}
              label='Title'
            />
            <Field.Text
              placeholder={user.name}
              name='name'
              label='First Name'
            />
            <Field.Text
              placeholder={user.surname}
              name='surname'
              label='Last Name'
            />
            <Field.Radio
              className={styles.formRadio}
              name='position'
              label='I Am'
              data={positionData}
              direction='row'
              value={user.position}
            />
            <Field.Text
              placeholder={user.company}
              name='company'
              label='Company'
            />
            <Field.Text placeholder={user.job} name='job' label='Job Title' />
            <Field.Text placeholder={user.city} name='city' label='City' />
            <Field.Text
              placeholder={user.country}
              name='country'
              label='Country'
            />
            <Field.Text placeholder={user.phone} name='phone' label='Phone' />
            <div style={{ position: 'relative' }}>
              <Button
                disabled={isSubmitting}
                className={styles.formSubmitButton}
                onClick={() => handleSubmit()}
              >
                {editProfileSuccess ? 'Saved' : 'Save'}
              </Button>
              <Preloader
                className={styles.preloader}
                id={Preloaders.profile}
                size={20}
                thickness={5}
              />
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { ContactAddress };

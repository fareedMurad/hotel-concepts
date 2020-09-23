import { editContactAddress } from '@app/redux/account';
import { State } from '@app/redux/state';
import { contactAddressValidationSchema } from '@auth/models/contanct-address';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models/preloader';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileData } from '../../profile.hook';
import { ContactAddressProps } from './contact-address.props';
import * as styles from './contact-address.scss';

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
          dispatch(editContactAddress(values));
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div className={styles.form}>
            <Field.Select
              name='title'
              options={titleData}
              className={styles.formTitleSelect}
              label='Title'
            />
            <Field.Text name='name' label='First Name' />
            <Field.Text name='surname' label='Last Name' />
            <Field.Radio
              className={styles.formRadio}
              name='position'
              label='I Am'
              data={positionData}
              direction='row'
            />
            <Field.Text name='company' label='Company' />
            <Field.Text name='job' label='Job Title' />
            <Field.Text name='city' label='City' />
            <Field.Text name='country' label='Country' />
            <Field.Text name='phone' label='Phone' />
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

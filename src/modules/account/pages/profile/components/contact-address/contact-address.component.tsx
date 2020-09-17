import * as React from 'react';
import { ContactAddressProps } from './contact-address.props';
import * as styles from './contact-address.scss';
import { useProfileData } from '../../profile.hook';
import { Formik } from 'formik';
import { Select, Field, Button, Form } from '@core/components';

const defaultValues = {
  title: '',
  name: '',
  surname: '',
  position: '',
  company: '',
  job: '',
  city: '',
  country: '',
  phone: ''
};

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
/**
 * Renders ContactAddress
 */
const ContactAddress: React.FC<ContactAddressProps> = ({}) => {
  const titles = [
    {
      label: 'Mr.',
      value: 'Mr.'
    },
    {
      label: 'Ms.',
      value: 'Ms.'
    }
  ];
  return (
    <React.Fragment>
      <div className={styles.title}>Contact address</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <div className={styles.form}>
            <Field.Select
              name='title'
              options={titles}
              className={styles.formTitleSelect}
              label='Title'
            />
            <Field.Text name='name' label='First Name' />
            <Field.Text name='surname' label='Last Name' />
            <Field.Radio
              className={styles.formRadio}
              name='position'
              label='I Am'
              data={radioIAMData}
              direction='row'
            />
            <Field.Text name='company' label='Company' />
            <Field.Text name='job' label='Job Title' />
            <Field.Text name='city' label='City' />
            <Field.Text name='country' label='Country' />
            <Field.Text name='phone' label='Phone' />
            <Button
              className={styles.formSubmitButton}
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { ContactAddress };

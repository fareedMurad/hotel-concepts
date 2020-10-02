import { Card } from '@account/components';
import { editContactAddress } from '@app/redux/account';
import { Button, Field, FormNew, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { contactAddressValidationSchema } from '../../models';
import { useContactAdressData } from './contact-address.hook';
import { ContactAddressProps } from './contact-address.props';
import * as styles from './contact-address.scss';

/**
 * Renders ContactAddress
 */
const ContactAddress: React.FC<ContactAddressProps> = ({ className }) => {
  const { defaultValues, positionData, titleData } = useContactAdressData();
  const dispatch = useDispatch();

  return (
    <Card
      className={classNames(styles.contactAddress, className)}
      title='Contact address'
    >
      <Preloader id={Preloaders.profileContactAddress} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={contactAddressValidationSchema}
          onSubmit={values => {
            dispatch(editContactAddress(values));
          }}
        >
          {({ handleSubmit }) => (
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Select name='title' label='Title' options={titleData} />
              <Field.Text name='name' label='First Name' />
              <Field.Text name='surname' label='Last Name' />
              <Field.RadioGroup
                className={styles.radiogroup}
                listClassname={styles.radiogroupList}
                labelClassname={styles.radiogroupLabel}
                radioClassname={styles.radiogroupRadio}
                name='position'
                label='I am'
                direction='column'
                data={positionData}
              />
              <Field.Text name='company' label='Company' />
              <Field.Text name='job' label='Job Title' />
              <Field.Text name='city' label='City' />
              <Field.Text name='country' label='Country' />
              <Field.Text name='phone' label='Phone' />
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { ContactAddress };

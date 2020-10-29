import { Button, Field, FormNew, Icon, Modal } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './new-email-modal.scss';

/**
 * Initial values
 */
const initialValues = {
  email: ''
};

/**
 * Renders NewEmail
 */
const NewEmailModal: React.FC = ({}) => {
  const dispatch = useDispatch();
  return (
    <Modal className={styles.modal} id={Modals.newEmail}>
      <Icon
        className={styles.close}
        name='close-modal'
        onClick={() => dispatch(closeModal(Modals.newEmail))}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <FormNew handleSubmit={handleSubmit}>
            <Field.Text
              className={styles.field}
              theme='secondary'
              name='email'
              label='Enter new email'
            />
            <Button className={styles.submit} arrow>
              Submit
            </Button>
          </FormNew>
        )}
      </Formik>
    </Modal>
  );
};

export { NewEmailModal };

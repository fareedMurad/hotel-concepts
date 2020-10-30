import { sendNewConfirmationEmail } from '@app/redux/auth';
import {
  Button,
  Field,
  FormNew,
  Icon,
  Modal,
  Preloader
} from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import { Formik } from 'formik';
import { parse } from 'query-string';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
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
  const history = useHistory();
  const {
    location: { search }
  } = history || {};
  const { email } = parse(search);

  return (
    <Modal className={styles.modal} id={Modals.newEmail}>
      <Preloader id={Preloaders.confirmationEmailResend}>
        <Icon
          className={styles.close}
          name='close-modal'
          onClick={() => dispatch(closeModal(Modals.newEmail))}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            dispatch(
              sendNewConfirmationEmail({
                oldEmail: email,
                newEmail: values.email
              })
            );
          }}
        >
          {({ handleSubmit }) => (
            <FormNew handleSubmit={handleSubmit}>
              <Field.Text
                className={styles.field}
                theme='secondary'
                name='email'
                label='Enter new email'
              />
              <Button
                className={styles.submit}
                arrow
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader>
    </Modal>
  );
};

export { NewEmailModal };

import { Button, Field, FormNew, Icon, Modal, H3 } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SubscribeModalProps } from './subscribe-modal.props';
import * as styles from './subscribe-modal.scss';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { sendForm } from '@app/redux/form';

const validationSchema = yup.object<{ email: string }>().shape({
  email: yup
    .string()
    .email()
    .label('E-mail')
    .required()
});

/**
 * Renders SubscribeModal
 */
const SubscribeModal: React.FC<SubscribeModalProps> = ({}) => {
  const initValues = {
    email: ''
  };
  const dispatch = useDispatch();
  return (
    <Modal className={styles.subscribeModal} id={Modals.subscribe}>
      <Icon
        className={styles.closeModal}
        name='close-modal'
        onClick={() => dispatch(closeModal(Modals.subscribe))}
      />
      <H3 className={styles.title}>Subscribe to get your 10% discount</H3>

      <Formik
        validationSchema={validationSchema}
        initialValues={initValues}
        onSubmit={v => {
          const payload = {
            subject: `Form 'Subscribe'`,
            data: { email: v.email }
          };
          dispatch(sendForm.subscription(payload));
        }}
      >
        {({ handleSubmit }) => (
          <FormNew handleSubmit={handleSubmit}>
            <Field.Text name='email' label='E-mail' theme='secondary' />
            <Button className={styles.submit} onClick={() => handleSubmit()}>
              Subscribe
            </Button>
          </FormNew>
        )}
      </Formik>
    </Modal>
  );
};

export { SubscribeModal };

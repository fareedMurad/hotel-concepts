import { countriesOptions } from '@app/dictionary/countries-options';
import { sendInvoiceRequest } from '@app/redux/cart';
import {
  Button,
  Field,
  FormNew,
  Icon,
  Modal,
  Preloader
} from '@core/components';
import { SuccessAlertModal } from '@pages/components/success-alert-modal';
import { closeModal } from '@ui/modal';

import { Modals, Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ModalInvoiceRequestProps } from './modal-invoice-request.props';
import * as styles from './modal-invoice-request.scss';
import { InvoiceValidationSchema, InvoiceValues } from './models/invoice';

/**
 * Invoice initial values
 */
const defaultValues: InvoiceValues = {
  name: '',
  email: '',
  country: '',
  number: ''
};

/**
 * Renders ModalInvoiceRequest
 */
const ModalInvoiceRequest: React.FC<ModalInvoiceRequestProps> = ({ total }) => {
  const dispatch = useDispatch();

  return (
    <Modal id={Modals.invoiceRequest} className={styles.modalInvoiceRequest}>
      <Preloader id={Preloaders.sendForm}>
        <Icon
          name='close-modal'
          className={styles.closeModal}
          onClick={() => dispatch(closeModal(Modals.invoiceRequest))}
        />
        <div className={styles.title}>Invoice request</div>
        <div className={styles.total}>
          Total amount <span className={styles.totalPrice}>${total}</span>
        </div>
        <Formik
          initialValues={defaultValues}
          validationSchema={InvoiceValidationSchema}
          onSubmit={values => {
            dispatch(sendInvoiceRequest(values));
          }}
        >
          {({ handleSubmit }) => (
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Text
                className={styles.formField}
                theme='secondary'
                name='name'
                label='Payer name'
              />
              <div className={styles.formHint}>
                *Please enter full legal name
              </div>
              <Field.Text
                className={styles.formField}
                theme='secondary'
                name='email'
                label='E-mail'
              />
              <Field.Text
                className={styles.formField}
                theme='secondary'
                name='number'
                label='Phone number'
                mask='+(999)-999-99-99'
              />
              <Field.Select
                className={styles.formField}
                theme='secondary'
                options={countriesOptions}
                name='country'
                label='Country'
              />
              <Button
                className={styles.submit}
                arrow
                onClick={() => handleSubmit()}
              >
                Request invoice
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader>
      <SuccessAlertModal />
    </Modal>
  );
};

export { ModalInvoiceRequest };

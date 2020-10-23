import { Button, Field, Form, Modal } from '@core/components';
import { countriesOptions } from '@core/components/select/select.options';
import { Modals } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { ModalInvoiceRequestProps } from './modal-invoice-request.props';
import * as styles from './modal-invoice-request.scss';

/**
 * Renders ModalInvoiceRequest
 */
const ModalInvoiceRequest: React.FC<ModalInvoiceRequestProps> = ({ total }) => {
  return (
    <Modal id={Modals.invoiceRequest} className={styles.modalInvoiceRequest}>
      <div className={styles.title}>Invoice request</div>
      <div className={styles.total}>
        Total amount <span className={styles.totalPrice}>${total}</span>
      </div>
      <Formik initialValues={{}} onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => (
          <Form className={styles.form}>
            <Field.Text name='name' label='Payer name' />
            <div className={styles.formHint}>*Please enter full legal name</div>
            <Field.Text name='email' label='E-mail' />
            <Field.Text name='number' label='Phone number' />
            <Field.Select
              options={countriesOptions}
              name='country'
              label='Country'
            />
            <Button width='100%' arrow onClick={() => handleSubmit}>
              Request invoice
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export { ModalInvoiceRequest };

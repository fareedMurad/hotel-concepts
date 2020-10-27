import { sendRequest } from '@app/redux/programs';
import { Button, Field, Form, Icon, Modal, Preloader } from '@core/components';
import { SuccessAlertModal } from '@pages/components/success-alert-modal';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as styles from './contact-us-modal.scss';
import {
  ContactUsModalValidationSchema,
  defaultValues
} from './models/contact-us-modal.model';

/**
 * Renders ContactUsModal
 */
const ContactUsModal: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Modal id={Modals.contactUs} className={styles.modal}>
        <Preloader id={Preloaders.sendForm}>
          <Icon
            name='close-modal'
            className={styles.closeModal}
            onClick={() => dispatch(closeModal(Modals.contactUs))}
          />
          <div className={styles.title}>{t('modal-contact-us.title')}</div>
          <div className={styles.caption}>{t('modal-contact-us.caption')}</div>
          <Formik
            validationSchema={ContactUsModalValidationSchema}
            initialValues={defaultValues}
            onSubmit={values => {
              dispatch(sendRequest(values));
            }}
          >
            {({ handleSubmit }) => (
              <Form className={styles.form}>
                <Field.Text
                  name='name'
                  label={t('modal-contact-us.form.name')}
                  theme='secondary'
                />
                <Field.Text
                  name='email'
                  label={t('modal-contact-us.form.email')}
                  theme='secondary'
                />
                <div className={styles.formSection}>
                  <div className={styles.formSectionContainer}>
                    <Field.Text
                      name='company'
                      label={t('modal-contact-us.form.company')}
                      theme='secondary'
                    />
                    <Field.Select
                      name='teamSize'
                      label={t('modal-contact-us.form.team')}
                      options={[]}
                      //   theme='secondary'
                    />
                  </div>
                  <div className={styles.formSectionContainer}>
                    <Field.Text
                      name='website'
                      label={t('modal-contact-us.form.website')}
                      theme='secondary'
                    />
                    <Field.Select
                      name='interests'
                      label={t('modal-contact-us.form.interests')}
                      options={[]}
                      theme='secondary'
                      className={styles.select}
                    />
                  </div>
                </div>
                <Field.Text
                  name='comment'
                  label={t('modal-contact-us.form.comment')}
                  theme='secondary'
                />
                <Button
                  className={styles.submit}
                  arrow
                  onClick={() => handleSubmit()}
                >
                  {t('modal-contact-us.form.button-text')}
                </Button>
              </Form>
            )}
          </Formik>
        </Preloader>
      </Modal>
      <SuccessAlertModal />
    </React.Fragment>
  );
};

export { ContactUsModal };

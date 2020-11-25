import {
  Button,
  Field,
  FormNew,
  Icon,
  Modal,
  H1,
  H4,
  Preloader
} from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SubscribeModalProps } from './subscribe-modal.props';
import * as styles from './subscribe-modal.scss';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { sendForm } from '@app/redux/form';
import { useTranslation } from 'react-i18next';
import { useUnlimitedAccessBooksData } from '@pages/homepage/sections/unlimited-access-books/unlimited-access-books.hook';

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
const SubscribeModal: React.FC<SubscribeModalProps> = () => {
  const { imageUrl } = useUnlimitedAccessBooksData();
  const { t } = useTranslation();
  const initValues = {
    email: ''
  };
  const dispatch = useDispatch();
  return (
    <Modal className={styles.subscribeModal} id={Modals.subscribe}>
      <Preloader id={Preloaders.sendForm}>
        <div className={styles.modalContent}>
          <Icon
            className={styles.closeModal}
            name='close-modal'
            onClick={() => {
              dispatch(closeModal(Modals.subscribe));
            }}
          />
          <div className={styles.text}>
            <Icon className={styles.logo} name='logo' />
            <H1 className={styles.title}>{t('subscribe-modal.title')}</H1>
            <div className={styles.caption}>{t('subscribe-modal.caption')}</div>
            <div className={styles.description}>
              {t('subscribe-modal.description')}
            </div>
            <H4 className={styles.subTitle}>
              {t('subscribe-modal.sub-title')}
            </H4>
            <div className={styles.hint}>{t('subscribe-modal.hint')}</div>
            <Formik
              validationSchema={validationSchema}
              initialValues={initValues}
              onSubmit={value => {
                dispatch(sendForm.subscribeBeta(value));
              }}
            >
              {({ handleSubmit }) => (
                <FormNew className={styles.form} handleSubmit={handleSubmit}>
                  <Field.Text
                    className={styles.field}
                    name='email'
                    placeholder={t('subscribe-modal.placeholder')}
                    theme='secondary'
                  />
                  <Button
                    className={styles.submit}
                    onClick={() => handleSubmit()}
                  >
                    Subscribe
                  </Button>
                </FormNew>
              )}
            </Formik>
          </div>

          <aside className={styles.aside}>
            <img className={styles.image} src={imageUrl} width={447} />
          </aside>
        </div>
      </Preloader>
    </Modal>
  );
};

export { SubscribeModal };

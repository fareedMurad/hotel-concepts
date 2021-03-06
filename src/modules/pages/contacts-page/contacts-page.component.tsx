import * as React from 'react';
import * as styles from './contacts-page.scss';
import {
  Paragraph,
  Form,
  Field,
  Button,
  PreCaption,
  SectionTitle,
  Preloader
} from '@core/components';
import { ContactUsFormValues } from '@app/models';
import { ContactsPageProps } from './contacts-page.props';
import { ContactsUsValidationSchema } from './models/validation';
import { FormResultModal } from '@pages/components/form-result-modal';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { sendForm } from '@app/redux/form';
import { useContactsPageData } from './contacts-page.hook';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, href, link }) => (
  <div className={styles.card}>
    <div className={styles.cardTitle}>{title}</div>
    <div className={styles.cardDescription}>{description}</div>
    <a href={href} className={styles.cardLink}>
      {link}
    </a>
  </div>
);
/**
 * default values
 */
const defaultValues: ContactUsFormValues = {
  subject: '',
  email: '',
  title: 'Mr',
  name: '',
  surname: '',
  comment: ''
};
/**
 * Renders ContactsPage
 */
const ContactsPage: React.FC<ContactsPageProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { cardsData, contactsFooterImage } = useContactsPageData();

  const types = [
    { label: 'Online Programs', value: 'Online Programs' },
    { label: 'Digital Library', value: 'Digital Library' },
    { label: 'Corporate Solutions', value: 'Corporate Solutions' },
    { label: 'Partnerships', value: 'Partnerships' },
    { label: 'Help', value: 'Help' },
    { label: 'Other', value: 'Other' }
  ];
  const genders = [
    { label: 'Mr', value: 'Mr' },
    { label: 'Ms', value: 'Ms' },
    { label: 'Miss', value: 'Miss' }
  ];

  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        <PreCaption>{t('contacts.pre-caption')}</PreCaption>
        <SectionTitle>{t('contacts.title')}</SectionTitle>
      </div>
      <section className={styles.cardsList}>
        {cardsData.map(({ id, title, description, href, link }) => (
          <Card
            title={title}
            description={description}
            href={href}
            link={link}
            key={id}
          />
        ))}
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerForm}>
          <PreCaption className={styles.preCaption}>
            {t('contacts.form.pre-caption')}
          </PreCaption>
          <SectionTitle>{t('contacts.form.title')}</SectionTitle>
          <Paragraph className={styles.footerFormParagraph}>
            {t('contacts.form.description')}
          </Paragraph>
          <div className={styles.footerFormCaption}>
            {t('contacts.form.sub-title')}
          </div>
          <main>
            <Preloader id={Preloaders.sendForm}>
              <Formik
                initialValues={defaultValues}
                onSubmit={values => {
                  dispatch(sendForm.contactUs(values));
                }}
                validationSchema={ContactsUsValidationSchema}
              >
                {({ handleSubmit }) => (
                  <Form handleSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroupA}>
                      <Field.Select
                        name='subject'
                        options={types}
                        defaultLabel={types[0].label}
                        label='Subject'
                        className={classNames(styles.select)}
                        labelClassname={styles.label}
                      />
                      <Field.Text
                        name='email'
                        type='email'
                        label={t('contacts.form.lable.email')}
                        className={styles.inputEmail}
                        placeholder='example@gmail.com'
                      />
                    </div>
                    <div className={styles.inputGroupB}>
                      <Field.Select
                        name='title'
                        defaultLabel={types[0].label}
                        label='Title'
                        options={genders}
                        labelClassname={styles.label}
                      />
                      <Field.Text
                        name='name'
                        label={t('contacts.form.lable.name')}
                        className={styles.inputName}
                        placeholder='John'
                      />
                      <Field.Text
                        name='surname'
                        label={t('contacts.form.lable.surname')}
                        className={styles.inputSurname}
                        placeholder='Doe'
                      />
                    </div>
                    <Field.TextArea
                      name='comment'
                      className={styles.textArea}
                      label={t('contacts.form.lable.comment')}
                    />
                    <Button
                      className={styles.buttonSend}
                      children={t('contacts.form.button-text')}
                      width={204}
                      onClick={() => handleSubmit()}
                    />
                  </Form>
                )}
              </Formik>
              <Paragraph className={styles.footerCaption}>
                {t('contacts.form.terms-one')} {/* #non-clickable */}
                {/* <Link
                  to='/privacy-policy'
                  style={{
                    color: '#ff6634',
                    textDecoration: 'underline',
                    fontWeight: 500
                  }}
                >
                  {t('contacts.form.p-p')}
                </Link>{' '} */}
                <div
                  style={{
                    color: '#ff6634',
                    textDecoration: 'underline',
                    fontWeight: 500,
                    display: 'inline',
                    cursor: 'pointer'
                  }}
                >
                  {t('contacts.form.p-p')}
                </div>{' '}
                {t('contacts.form.terms-two')}
              </Paragraph>
            </Preloader>
          </main>
        </div>
        <img src={contactsFooterImage} className={styles.footerImg} />
      </footer>
      <FormResultModal />
      {/* <Footer /> */}
    </div>
  );
};

export { ContactsPage };

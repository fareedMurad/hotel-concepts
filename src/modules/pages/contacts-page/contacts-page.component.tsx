import * as React from 'react';
import { ContactsPageProps } from './contacts-page.props';
import * as styles from './contacts-page.scss';
import {
  H2,
  Paragraph,
  Form,
  Field,
  Select,
  Button,
  PreCaption,
  Footer,
  SectionTitle
} from '@core/components';
import { useContactsPageData } from './contacts-page.hook';
import { Formik } from 'formik';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, href, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDescription}>{description}</div>
      <a href={href} className={styles.cardLink}>
        {link}
      </a>
    </div>
  );
};
/**
 * default values
 */
const defaultValues = {
  type: '',
  email: '',
  gender: '',
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
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
  ];
  const genders = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' }
  ];
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    window.scrollTo(0, 0);
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);

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
            <Formik
              initialValues={defaultValues}
              onSubmit={values => console.log(values)}
            >
              {({ handleSubmit }) => (
                <Form handleSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroupA}>
                    <Select
                      value=''
                      options={types}
                      placeholder='Enrollment'
                      className={classNames(styles.selectA)}
                      whiteBackground
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
                    <Select
                      value=''
                      options={genders}
                      placeholder='Mr'
                      className={classNames(styles.selectB)}
                      whiteBackground
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
                  <div className={styles.textAreaWrapper}>
                    <div>{t('contacts.form.lable.comment')}</div>
                    <textarea name='comment' className={styles.textArea} />
                  </div>
                  <Button
                    className={styles.buttonSend}
                    children={t('contacts.form.button-text')}
                    arrow='&#8594;'
                    width={204}
                  />
                </Form>
              )}
            </Formik>
            <Paragraph className={styles.footerCaption}>
              {t('contacts.form.terms-one')}{' '}
              <Link
                to='/privacy-policy'
                style={{
                  color: '#ff6634',
                  textDecoration: 'underline',
                  fontWeight: 500
                }}
              >
                {t('contacts.form.p-p')}
              </Link>{' '}
              {t('contacts.form.terms-two')}
            </Paragraph>
          </main>
        </div>
        <img src={contactsFooterImage} className={styles.footerImg} />
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export { ContactsPage };

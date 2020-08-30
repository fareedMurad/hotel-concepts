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
        <PreCaption>We're here to help!</PreCaption>
        <SectionTitle>Contact Us</SectionTitle>
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
            Still seeking your answer?
          </PreCaption>
          <SectionTitle>Let us help you directly</SectionTitle>
          <Paragraph className={styles.footerFormParagraph}>
            Please complete the form below with details of your request. We’ll
            get back to you by email, so make sure you include the right email
            address.
          </Paragraph>
          <div className={styles.footerFormCaption}>
            What is your question about?
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
                      label='E-mail'
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
                      label='Name'
                      className={styles.inputName}
                      placeholder='John'
                    />
                    <Field.Text
                      name='surname'
                      label='Surname'
                      className={styles.inputSurname}
                      placeholder='Doe'
                    />
                  </div>
                  <div className={styles.textAreaWrapper}>
                    <div>Comment</div>
                    <textarea name='comment' className={styles.textArea} />
                  </div>
                  <Button
                    className={styles.buttonSend}
                    children='Send'
                    arrow='&#8594;'
                    width={204}
                  />
                </Form>
              )}
            </Formik>
            <Paragraph className={styles.footerCaption}>
              Kordie takes your privacy very seriously. We may process your
              personal information for carefully considered and specific
              purposes which are in our interests and enable us to enhance the
              services we provide, but which we believe also benefit our
              customers. View our{' '}
              <Link
                to='/privacy-policy'
                style={{
                  color: '#ff6634',
                  textDecoration: 'underline',
                  fontWeight: 500
                }}
              >
                Privacy Policy
              </Link>{' '}
              to learn more about these interests and when we may process your
              information in this way.
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

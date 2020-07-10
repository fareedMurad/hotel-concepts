import * as React from 'react';
import { ContactsPageProps } from './contacts-page.props';
import * as styles from './contacts-page.scss';
import { Header } from '@core/components/header';
import { H2, Paragraph, Form, Field, Select, Button } from '@core/components';
import { useContactsPageData } from './contacts-page.hook';
import { Formik } from 'formik';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
  const { data } = useContactsPageData();
  const types = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
  ];
  const genders = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' }
  ];
  return (
    <div className={styles.contactsPage}>
      <header className={styles.header}>
        <Header whiteBackground />
      </header>
      <div className={styles.container}>
        <div className={styles.heading}>We're here to help!</div>
        <H2>Contact Us</H2>
      </div>
      <section className={styles.cardsList}>
        {data.map(({ id, title, description, href, link }) => (
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
          <div className={styles.heading}>Still seeking your answer?</div>
          <H2>Let us help you directly</H2>
          <Paragraph>
            Please complete the form below with details of your request. We’ll
            get back to you by email, so make sure you include the right email
            address.
          </Paragraph>
          <div>What is your question about?</div>
          <main>
            <Formik
              initialValues={defaultValues}
              onSubmit={values => console.log(values)}
            >
              {({ handleSubmit }) => (
                <Form>
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
                    />
                    <Field.Text
                      name='surname'
                      label='Surname'
                      className={styles.inputSurname}
                    />
                  </div>
                  <textarea name='comment' className={styles.textArea} />
                  <Button className={styles.buttonSend}>
                    <div>Send</div>
                    <div>&#8594;</div>
                  </Button>
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
                style={{ color: '#ff6634', textDecoration: 'underline' }}
              >
                Privacy Policy
              </Link>{' '}
              to learn more about these interests and when we may process your
              information in this way.
            </Paragraph>
          </main>
        </div>
        <img src={require('img/about-us-1.png')} className={styles.footerImg} />
      </footer>
    </div>
  );
};

export { ContactsPage };

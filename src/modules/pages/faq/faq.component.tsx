import * as React from 'react';
import { FaqProps } from './faq.props';
import * as styles from './faq.scss';
import { Header } from '@core/components/header';
import {
  H2,
  ButtonFilter,
  Footer,
  H3,
  Field,
  Form,
  Button
} from '@core/components';
import { useFaqData } from './faq.hook';
import classNames from 'classnames';
import { Formik } from 'formik';

/**
 * Props
 */
type QuestionProps = {
  question: {
    id?: string | number;
    caption: string;
    description: string;
  };
  opened: boolean;
  onClick: () => void;
};
/**
 * Renders expandable card
 */
const Question: React.FC<QuestionProps> = ({ question, opened, onClick }) => {
  const { caption, description } = question;
  return (
    <div className={styles.question} onClick={onClick}>
      <div
        className={classNames(styles.questionContent, {
          [styles.questionContentVisible]: opened
        })}
      >
        <div
          className={classNames(styles.questionMark, {
            [styles.questionMarkClosed]: !opened
          })}
        />
        <div
          className={classNames(styles.questionCaption, {
            [styles.questionCaptionOpened]: opened
          })}
        >
          {caption}
        </div>
      </div>
      <div
        className={classNames(styles.questionDescription, {
          [styles.questionDescriptionOpened]: opened
        })}
      >
        {description}
      </div>
    </div>
  );
};
/**
 * Renders Faq
 */
const Faq: React.FC<FaqProps> = ({}) => {
  const { filters, questions } = useFaqData();
  const [isActive, setIsActive] = React.useState(null);
  const [openedQuestion, setOpenedQuestion] = React.useState(null);

  return (
    <div className={styles.faq}>
      <header className={styles.header}>
        <Header whiteBackground />
      </header>
      <div className={styles.container}>
        <H2>
          Relax because we always <br /> be here for you.
        </H2>
      </div>
      <div className={styles.filters}>
        {filters.map(filter => {
          const { id, title, count } = filter;
          const active = id === isActive;

          return (
            <ButtonFilter
              key={id}
              title={title}
              count={count}
              onClick={() => setIsActive(id)}
              active={active}
            />
          );
        })}
      </div>
      <div className={styles.faqQuestions}>
        {questions.map(question => {
          const opened = openedQuestion === question.id;
          return (
            <Question
              question={question}
              key={question.id}
              opened={opened}
              onClick={() => setOpenedQuestion(!opened ? question.id : null)}
            />
          );
        })}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            Don't like forms? Send us an{' '}
            <span style={{ textDecoration: 'underline' }}>email</span>
          </div>
          <div>
            <H3>Let's talk about everything.</H3>
          </div>
          <div className={styles.form}>
            <Formik
              initialValues={{ name: '', email: '', comment: '' }}
              onSubmit={values => console.log(values)}
              // validationSchema={} add later
            >
              {({ handleSubmit }) => (
                <Form>
                  <div className={styles.formInputs}>
                    <Field.Text name='name' label='Name' />
                    <Field.Text name='email' type='email' label='E-mail' />
                  </div>
                  <textarea name='comment' className={styles.textArea} />
                  <div className={styles.submitForm}>
                    <Field.Checkbox
                      name='accept'
                      label='Accept terms & Conditions'
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      className={styles.submitButton}
                    >
                      <div>Send</div> <div>&#8594;</div>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className={styles.footerHr} />
      </footer>
      <Footer />
    </div>
  );
};

export { Faq };

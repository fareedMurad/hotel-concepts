import * as React from 'react';
import { ArticleSecondSectionProps } from './article-second-section.props';
import * as styles from './article-second-section.scss';
import { Formik } from 'formik';
import { Form, Field, Button, Paragraph, H2 } from '@core/components';
import { useArticlePageData } from '@pages/article-page/article-page.hook';
import { useMediaPoints } from '@core/shared';

/**
 * Renders ArticleSecondSection
 */
const ArticleSecondSection: React.FC<ArticleSecondSectionProps> = ({}) => {
  const { bodyContent, bodyTitle } = useArticlePageData();
  const { desktop } = useMediaPoints();

  return (
    <div className={styles.articleSecondSection}>
      <div className={styles.hr} />
      <section className={styles.content}>
        <Paragraph>{bodyContent[0]}</Paragraph>
        <Paragraph>{bodyContent[1]}</Paragraph>
        <H2 className={styles.title}>{bodyTitle[0]}</H2>
        <Paragraph>{bodyContent[2]}</Paragraph>
        <Paragraph>{bodyContent[3]}</Paragraph>
      </section>
      {desktop && (
        <aside className={styles.aside}>
          <div>
            Fresh insight in your box
            <Formik
              initialValues={{ email: '' }}
              onSubmit={email => console.log(email)}
            >
              {({ handleSubmit }) => (
                <Form handleSubmit={handleSubmit}>
                  <Field.Text type='email' label='Email' name='email' />
                  <Button
                    className={styles.button}
                    onClick={() => handleSubmit()}
                  >
                    <div>Subscribe</div>
                    <div>&#8594;</div>
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </aside>
      )}
    </div>
  );
};

export { ArticleSecondSection };

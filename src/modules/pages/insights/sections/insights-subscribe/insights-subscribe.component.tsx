import * as React from 'react';
import { InsightsSubscribeProps } from './insights-subscribe.props';
import * as styles from './insights-subscribe.scss';
import { H2, Form, Field, Button, Tabs, PreCaption } from '@core/components';
import { Formik } from 'formik';
import { useMediaPoints } from '@core/shared';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { sendForm } from '@app/redux/form';

/**
 * Renders InsightsSubscribe
 */
const InsightsSubscribe: React.FC<InsightsSubscribeProps> = ({}) => {
  const { tablet } = useMediaPoints();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={styles.insightsSubscribe}>
      <div className={styles.wrapper}>
        <PreCaption>{t('insights.insights-subscribe.pre-caption')}</PreCaption>
        <div className={styles.title}>
          <H2>Industry insights you won't delete</H2>
        </div>
        <Formik
          initialValues={{ email: '', subscribeType: '0' }}
          onSubmit={values => {
            const payload = {
              subject: `Form 'Insights Subscribe'`,
              data: values
            };
            dispatch(sendForm(payload));
            // dispatch(action(values));
          }}
          // validationSchema={} add later
        >
          {({ handleSubmit }) => (
            <Form handleSubmit={handleSubmit} className={styles.form}>
              <Field.Tabs
                name='subscribeType'
                className={styles.tabs}
                data={[
                  {
                    id: '0',
                    caption: t('insights.insights-subscribe.tabs.tab1.title'),
                    description: t(
                      'insights.insights-subscribe.tabs.tab1.description'
                    )
                  },
                  {
                    id: '1',
                    caption: t('insights.insights-subscribe.tabs.tab2.title'),
                    description: t(
                      'insights.insights-subscribe.tabs.tab2.description'
                    )
                  },
                  {
                    id: '2',
                    caption: t('insights.insights-subscribe.tabs.tab3.title'),
                    description: t(
                      'insights.insights-subscribe.tabs.tab3.description'
                    )
                  }
                ]}
              />
              <div className={styles.submitForm}>
                <Field.Text
                  name='email'
                  label='E-mail'
                  type='email'
                  className={styles.formInput}
                />
                <Button
                  onClick={() => handleSubmit()}
                  className={styles.buttonSubmit}
                  type='submit'
                  children={t('insights.insights-subscribe.button-text')}
                  arrow
                  width={tablet ? '35%' : '40%'}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { InsightsSubscribe };

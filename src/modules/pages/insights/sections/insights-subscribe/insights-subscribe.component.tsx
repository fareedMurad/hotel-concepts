import * as React from 'react';
import * as styles from './insights-subscribe.scss';
import {
  H2,
  Form,
  Field,
  Button,
  Tabs,
  PreCaption,
  Preloader
} from '@core/components';
import { Formik } from 'formik';
import { InsightsSubscribeProps } from './insights-subscribe.props';
import { InsightsSubscribeValidationSchema } from './models';
import { Preloaders } from '@ui/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useMediaPoints } from '@core/shared';
import { useTranslation } from 'react-i18next';

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
        <Preloader id={Preloaders.formSubscription}>
          <Formik
            initialValues={{ email: '', subscribeType: '0' }}
            onSubmit={values => {
              let type;
              if (values.subscribeType === '0') {
                type = 'Weekly Insights';
              }
              if (values.subscribeType === '1') {
                type = 'The Daily Alert';
              }
              if (values.subscribeType === '2') {
                type = 'Leadership';
              }
              const payload = {
                subject: `Form 'Insights Subscribe'`,
                data: { email: values.email, type }
              };
              dispatch(sendForm.subscription(payload));
            }}
            validationSchema={InsightsSubscribeValidationSchema}
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
        </Preloader>
      </div>
    </div>
  );
};

export { InsightsSubscribe };

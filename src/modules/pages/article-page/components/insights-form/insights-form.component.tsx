import * as React from 'react';
import * as styles from './insights-form.scss';
import * as yup from 'yup';
import { Form, Field, Button, Preloader } from '@core/components';
import { FormResultSubscriptionModal } from '@pages/components/form-result-modal/form-result-subscription-modal/form-result-subscription-modal.component';
import { Formik } from 'formik';
import { InsightsFormProps } from './insights-form.props';
import { Preloaders } from '@ui/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
/**
 * validation schema
 */

const validationSchema = yup.object<{ email: string }>().shape({
  email: yup
    .string()
    .email()
    .label('E-mail')
    .required()
});
/**
 * Renders InsightsForm
 */
const InsightsForm: React.FC<InsightsFormProps> = ({}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  return (
    <aside className={styles.aside}>
      <div>
        <div>{t('insights-form.title')}</div>
        <Preloader id={Preloaders.formSubscription}>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
              const payload = {
                subject: `Form 'Subscribe'`,
                data: { email: values.email }
              };
              dispatch(sendForm.subscription(payload));
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <Form handleSubmit={handleSubmit} className={styles.form}>
                <Field.Text type='email' label='Email' name='email' />
                <Button
                  className={styles.button}
                  onClick={() => handleSubmit()}
                  children={t('insights-form.button-text')}
                  arrow
                  width={284}
                />
              </Form>
            )}
          </Formik>
        </Preloader>
      </div>
      <FormResultSubscriptionModal />
    </aside>
  );
};

export { InsightsForm };

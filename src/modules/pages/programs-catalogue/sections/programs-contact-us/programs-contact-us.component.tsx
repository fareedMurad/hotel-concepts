import * as React from 'react';
import { ProgramsContactUsProps } from './programs-contact-us.props';
import * as styles from './programs-contact-us.scss';
import { Button, Field, FormNew, Preloader } from '@core/components';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { sendForm } from '@app/redux/form';
import { ProgramCatalogueFormValues } from '@app/models';
import { Preloaders } from '@ui/models';
import { FormResultModal } from '@pages/components/form-result-modal';
import { ProgramContacUsValidationSchema } from './models';

/**
 * default values for form
 */
const defaultValues: ProgramCatalogueFormValues = {
  name: '',
  email: '',
  website: '',
  teamSize: '',
  interests: ''
};

/**
 * Get hero image
 */
const GET_HERO_IMAGE = gql`
  {
    asset(id: "172ajOUFQrMpose4jteiQF") {
      url
    }
  }
`;
/**
 * Renders ProgramsContactUs
 */
const ProgramsContactUs: React.FC<ProgramsContactUsProps> = ({
  reduceMargin
}) => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const dispatch = useDispatch();
  const teamsize = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
  ];
  return (
    <React.Fragment>
      <div
        className={classNames(styles.programsContactUs, {
          [styles.programsContactUsReduceMg]: reduceMargin
        })}
      >
        <Preloader id={Preloaders.sendForm}>
          <div className={styles.title}>
            <div>{t('programs-catalogue.form.title')}</div>
            <div>{t('programs-catalogue.sub-title')}</div>
          </div>
          <Formik
            initialValues={defaultValues}
            validationSchema={ProgramContacUsValidationSchema}
            onSubmit={values => {
              const payload = {
                subject: `Form 'Contact Us'`,
                data: values
              };
              dispatch(sendForm.consultRequest(values));
            }}
          >
            {({ handleSubmit }) => (
              <FormNew className={styles.form} handleSubmit={handleSubmit}>
                <div className={styles.textInputs}>
                  <Field.Text
                    name='name'
                    label='Name'
                    className={styles.field}
                  />
                  <Field.Text
                    name='email'
                    label='Email'
                    className={styles.field}
                  />
                  <Field.Text
                    name='website'
                    label='Website'
                    className={styles.field}
                  />
                </div>
                <Field.Select
                  name='teamSize'
                  options={teamsize}
                  placeholder='How many employees need training?'
                  className={styles.select}
                  whiteBackground
                  value='How many employees need training?'
                />
                <Field.Select
                  name='interests'
                  options={teamsize}
                  placeholder='What paths are you interestedins?'
                  className={styles.select}
                  whiteBackground
                  value='What paths are you interestedins?'
                />
                <Button
                  className={styles.submit}
                  arrow
                  onClick={() => handleSubmit()}
                >
                  Contact Us
                </Button>
              </FormNew>
            )}
          </Formik>
        </Preloader>
        <FormResultModal />
      </div>
      <div
        className={styles.footer}
        style={{ backgroundImage: `url(${data?.asset?.url})` }}
      />
    </React.Fragment>
  );
};

export { ProgramsContactUs };

import * as React from 'react';
import { ProgramsContactUsProps } from './programs-contact-us.props';
import * as styles from './programs-contact-us.scss';
import { Button, Field, FormNew, Preloader } from '@core/components';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sendForm } from '@app/redux/form';
import { ProgramCatalogueFormValues } from '@app/models';
import { Preloaders } from '@ui/models';
import { FormResultModal } from '@pages/components/form-result-modal';
import { ProgramContacUsValidationSchema } from './models';
import { State } from '@app/redux/state';
import { checkBrowserVersion } from '@general/store';

/**
 * Team size
 */

const teamsizeSelect = [
  { label: 'Less than 10 employees', value: 'Less than 10 employees' },
  { label: '11-25 employees', value: '11-25 employees' },
  { label: '22-50 employees', value: '22-50 employees' },
  { label: '50-100 employees', value: '50-100 employees' },
  { label: '100+ employees', value: '100+ employees' }
];

const interestsSelect = [
  { label: 'Focused Programs', value: 'Focused Programs' },
  {
    label: 'Digital Transformation Programs',
    value: 'Digital Transformation Programs'
  },
  {
    label: 'Essential Soft Skills Programs',
    value: 'Essential Soft Skills Programs'
  },
  { label: 'Leadership Programs', value: 'Leadership Programs' },
  { label: 'Managing Covid-10 Programs', value: 'Managing Covid-10 Programs' },
  { label: 'Other', value: 'Other' }
];

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
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';

  const heroImageUrl = oldSafari
    ? `url(${data?.asset?.url})`
    : `url(${data?.asset?.url}?fm=webp)`;

  const dispatch = useDispatch();

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
            <div>{t('programs-catalogue.form.description')}</div>
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
                  options={teamsizeSelect}
                  placeholder='How many employees need training?'
                  className={styles.select}
                  defaultLabel='How many employees need training?'
                />
                <Field.Select
                  name='interests'
                  options={interestsSelect}
                  placeholder='What paths are you interested in?'
                  className={styles.select}
                  defaultLabel='What paths are you interested in?'
                />
                <Button
                  className={styles.submit}
                  arrow
                  onClick={() => handleSubmit()}
                >
                  Contact Me
                </Button>
              </FormNew>
            )}
          </Formik>
        </Preloader>
        <FormResultModal />
      </div>
      <div
        className={styles.footer}
        style={{ backgroundImage: heroImageUrl }}
      />
    </React.Fragment>
  );
};

export { ProgramsContactUs };

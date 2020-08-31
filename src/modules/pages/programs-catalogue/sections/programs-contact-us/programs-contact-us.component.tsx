import * as React from 'react';
import { ProgramsContactUsProps } from './programs-contact-us.props';
import * as styles from './programs-contact-us.scss';
import { Button } from '@core/components';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
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
  const formInitValue = {
    name: '',
    email: '',
    website: '',
    employees: '',
    interest: ''
  };
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  const [formValues, setFormValue] = React.useState(formInitValue || {});

  const changeTextValue = (event: any) =>
    setFormValue({
      ...formValues,
      [event.target.name]: event.target.value
    });

  const submitHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div
        className={classNames(styles.programsContactUs, {
          [styles.programsContactUsReduceMg]: reduceMargin
        })}
      >
        <div className={styles.title}>
          <div>{t('programs-catalogue.form.title')}</div>
          <div>{t('programs-catalogue.sub-title')}</div>
        </div>
        <form className={styles.contactForm} onSubmit={submitHandler}>
          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>
              {t('programs-catalogue.form.lable.name')}
            </div>
            <input
              name='name'
              onChange={changeTextValue}
              type='text'
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>
              {t('programs-catalogue.form.lable.email')}
            </div>
            <input
              name='email'
              onChange={changeTextValue}
              type='text'
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>
              {t('programs-catalogue.form.lable.website')}
            </div>
            <input
              name='website'
              onChange={changeTextValue}
              type='text'
              className={styles.inputField}
            />
          </div>

          <div
            className={classNames(
              styles.inputSelectContainer,
              styles.inputGroup
            )}
          >
            <select
              name='employees'
              onChange={changeTextValue}
              className={classNames(styles.inputField, styles.inputSelect)}
            >
              <option value=''>
                {t('programs-catalogue.form.lable.question1')}
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>

          <div
            className={classNames(
              styles.inputSelectContainer,
              styles.inputGroup
            )}
          >
            <select
              name='interest'
              onChange={changeTextValue}
              className={classNames(styles.inputField, styles.inputSelect)}
            >
              <option value=''>
                {t('programs-catalogue.form.lable.question2')}
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <Button
            type='submit'
            className={styles.button}
            children={t('programs-catalogue.form.lable.button-text')}
            arrow='&#8594;'
          />
        </form>
      </div>
      <div
        className={styles.footer}
        style={{ backgroundImage: `url(${data?.asset?.url})` }}
      />
    </React.Fragment>
  );
};

export { ProgramsContactUs };

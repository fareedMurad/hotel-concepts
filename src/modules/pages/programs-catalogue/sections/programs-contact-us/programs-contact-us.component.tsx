import * as React from 'react';
import { ProgramsContactUsProps } from './programs-contact-us.props';
import * as styles from './programs-contact-us.scss';
import { Button } from '@core/components';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';
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
const ProgramsContactUs: React.FC<ProgramsContactUsProps> = ({}) => {
  const formInitValue = {
    name: '',
    email: '',
    website: '',
    employees: '',
    interest: ''
  };
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
      <div className={styles.programsContactUs}>
        <div className={styles.title}>
          <div>Contact Us</div>
          <div>
            Whether you are an individual or an organisation/group, looking for
            a program, get in touch and we can help find the best solution for
            you.
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={submitHandler}>
          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>Name</div>
            <input
              name='name'
              onChange={changeTextValue}
              type='text'
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>E-mail</div>
            <input
              name='email'
              onChange={changeTextValue}
              type='text'
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputTitle}>Website</div>
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
              <option value=''>How many employees need training?</option>
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
              <option value=''>What paths are you interested in?</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <Button
            type='submit'
            className={styles.button}
            children='Contact me'
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

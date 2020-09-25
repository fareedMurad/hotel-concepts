import { Card } from '@account/components';
import { editNewsletterSubscription } from '@app/redux/account';
import { State } from '@app/redux/state';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsletterProps } from './newsletter.props';
import * as styles from './newsletter.scss';

/**
 * Renders Newsletter
 */
const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: State) => state.auth);

  return (
    <Card
      className={classNames(styles.newsletter, className)}
      title='Newsletter'
      offsetTop={18}
    >
      <Preloader id={Preloaders.profileNewsletter} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={{ newsSub: user?.newsSub }}
          onSubmit={values => {
            dispatch(editNewsletterSubscription(values));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <Field.Checkbox
                labelClassname={styles.checkboxLabel}
                name='newsSub'
                label='I agree to service Newsletter and Special Offers.'
              />
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save
              </Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { Newsletter };

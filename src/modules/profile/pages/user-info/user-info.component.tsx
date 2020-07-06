import { Field, Form, H1, Preloader } from '@core/components';
import { userInfoValidationSchema } from '@profile/models';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useUserInfoData } from './user-info.hook';
import * as styles from './user-info.scss';

/**
 * Renders UserInfo
 */
const UserInfo: React.FC = () => {
  const { defaultValues } = useUserInfoData();

  return (
    <Preloader id={Preloaders.userInfo}>
      <div className={styles.userInfo}>
        <H1 className={styles.caption}>User Info</H1>
        <Formik
          initialValues={defaultValues}
          validationSchema={userInfoValidationSchema}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit }) => (
            <Form className={styles.form}>
              <Field.Text name='name' label='Name' placeholder='Name' />
              <Field.Text
                name='surname'
                label='Surname'
                placeholder='Surname'
              />
            </Form>
          )}
        </Formik>
      </div>
    </Preloader>
  );
};

export { UserInfo };

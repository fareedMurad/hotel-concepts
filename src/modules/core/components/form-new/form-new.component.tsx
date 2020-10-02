import classNames from 'classnames';
import * as React from 'react';
import { FormNewProps } from './form-new.props';
import * as styles from './form-new.scss';

/**
 * Renders FormNew
 */
const FormNew: React.FC<FormNewProps> = ({
  className,
  handleSubmit,
  children
}) => (
  <form
    className={classNames(styles.form, className)}
    // onSubmit={e => e.preventDefault()}
    onKeyDown={e => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    }}
  >
    {children}
  </form>
);

export { FormNew };

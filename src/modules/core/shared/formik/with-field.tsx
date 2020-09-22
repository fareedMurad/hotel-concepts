import { useFormikContext } from 'formik';
import * as React from 'react';
import { get } from 'object-path';
import { useCallback } from 'react';
import { FormikStatus } from './status';
import { ComponentType } from 'enzyme';

/**
 * Field props
 */
type Props = {
  value?: any;
  error?: any;
  isError?: any;
  onChange?: any;
  disabled?: any;
};

/**
 * Use field props
 */
const useFieldProps = (name: string) => {
  const {
    values,
    errors,
    submitCount,
    setFieldValue,
    isSubmitting,
    ...formik
  } = useFormikContext<any>();
  const status: FormikStatus = formik.status;
  const statusError = status && get(status.errors, name);
  const error = get(status, 'errors' + '.' + name) || get(errors, name);
  const isError =
    statusError != undefined || (submitCount >= 1 && error != undefined);
  const value = get(values, name);
  const onChange = useCallback(
    value => {
      setFieldValue(name, value);
    },
    [setFieldValue, name, value]
  );

  return {
    value,
    error,
    isError,
    status,
    onChange,
    isSubmitting
  };
};

/**
 * Wrap component with field data provided
 */
function withField<P extends Props>(source: ComponentType<P>) {
  const Result: any = source;
  const result: React.FC<{ name: string }> = props => {
    const {
      value,
      error,
      isError,
      onChange,
      isSubmitting,
      status
    } = useFieldProps(props.name);

    return (
      <Result
        value={value}
        error={error}
        isError={isError}
        onChange={onChange}
        disabled={isSubmitting || get(status, 'disabled')}
        {...props}
      />
    );
  };

  return (result as any) as ComponentType<
    { name: string } & Omit<P, keyof Props> & Partial<Pick<P, keyof Props>>
  >;
}

export { withField, useFieldProps };

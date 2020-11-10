import * as React from 'react';
import * as styles from './checkbox.scss';
import { CheckboxGroupProps, CheckboxProps } from './checkbox.props';
import { Icon } from '../icon';
import { Label } from '../label';
import classNames from 'classnames';

/**
 * Renders Checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onChange,
  className,
  errorClassname,
  labelClassname,
  isError,
  error,
  disabled,
  ...props
}) => (
  <button
    className={classNames(styles.checkbox, className, {
      [styles.checkboxDisabled]: disabled
    })}
    onClick={e => {
      e.preventDefault();
      if (disabled) return;
      onChange(!value);
    }}
    {...props}
  >
    <div
      className={classNames(styles.flag, {
        [styles.flagChecked]: value,
        [styles.flagError]: isError
      })}
    >
      {value && <Icon className={styles.checkIcon} name='check-sm' />}
    </div>
    {typeof label == 'string' ? (
      <Label className={classNames(styles.label, labelClassname)}>
        {label}
      </Label>
    ) : (
      label()
    )}
    {isError && (
      <div className={classNames(styles.error, errorClassname)}>{error}</div>
    )}
  </button>
);

/**
 * Renders checkbox group
 */
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  data,
  theme,
  value,
  label,
  className,
  error,
  isError,
  onChange
}) => {
  const handleClick = (val: string) => {
    if (!val) return;

    const match = value.some(one => one == val);

    onChange(match ? value.filter(one => one != val) : [...value, val]);
  };

  return (
    <div className={classNames(styles.checkboxGroup, className)}>
      {label && <Label className={styles.checkboxGroupLabel}>{label}</Label>}
      <div className={styles.checkboxGroupContainer}>
        {data?.map(({ label, value: val }, index) => (
          <Checkbox
            value={value.some(one => one == val)}
            label={label}
            onClick={() => handleClick(val)}
            key={index}
          />
        ))}
      </div>
      {isError && <div className={styles.error}>{error}</div>}
    </div>
  );
};

/**
 * Default Checkbox group props
 */
CheckboxGroup.defaultProps = {
  data: [],
  theme: 'md',
  value: [],
  onChange: () => {}
};

/**
 * Default props
 */
Checkbox.defaultProps = {
  label: '',
  value: false,
  onChange: () => {},
  className: '',
  disabled: false
};

export { Checkbox, CheckboxGroup };

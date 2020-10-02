import * as React from 'react';
import { RadioGroupProps, RadioProps } from './radio.props';
import * as styles from './radio.scss';
import classNames from 'classnames';
import { Label } from '../label';
import { capitalize } from '@core/shared';

/**
 * Renders Radio
 */
const Radio: React.FC<RadioProps> = ({
  value,
  label,
  onChange,
  disabled,
  labelClassname,
  className,
  isError,
  error
}) => (
  <div
    className={classNames(styles.radio, className)}
    onClick={() => onChange(value)}
  >
    <div
      className={classNames(styles.flag, {
        [styles.flagActive]: value
      })}
    >
      <div className={styles.flagInner} />
    </div>
    <Label className={classNames(styles.radioLabel, labelClassname)}>
      {label}
    </Label>
  </div>
);

/**
 * Renders Radiogroup
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  labelClassname,
  listClassname,
  radioClassname,
  direction,
  data,
  onChange,
  value: groupValue,
  label,
  error,
  isError
}) => (
  <div className={classNames(styles.radiogroup, className)}>
    {label && <Label className={styles.radiogroupLabel}>{label}</Label>}
    <div
      className={classNames(
        styles.radiogroupList,
        listClassname,
        styles['radiogroupList' + capitalize(direction)]
      )}
    >
      {data.map(({ value, label }, index) => {
        //Temporary check for label - should check value
        const match = label == groupValue;

        return (
          <Radio
            className={classNames(styles.radiogroupRadio, radioClassname)}
            value={match}
            label={label}
            labelClassname={labelClassname}
            onChange={() => onChange(label)}
            key={index}
          />
        );
      })}
      {isError && <div className={styles.error}>{error}</div>}
    </div>
  </div>
);

/**
 * Radio props
 */
Radio.defaultProps = {
  label: '',
  value: false,
  onChange: () => {},
  className: '',
  disabled: false
};

/**
 * Radiogroup props
 */
RadioGroup.defaultProps = {
  direction: 'row'
};

export { Radio, RadioGroup };

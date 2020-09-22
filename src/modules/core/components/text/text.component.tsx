import * as React from 'react';
import { TextProps } from './text.props';
import * as styles from './text.scss';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { isIOS } from 'react-device-detect';
import { Label } from '../label';
/**
 * Renders Text
 */
const Text: React.FC<TextProps> = ({
  id,
  value,
  type,
  placeholder,
  className,
  disabled,
  onChange,
  label,
  tabIndex,
  mask,
  error,
  ref,
  isError,
  autoComplete
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={classNames(styles.text, className, {
        [styles.textFocused]: focused
      })}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <InputMask
        className={classNames(styles.input, {
          [styles.inputInvalid]: isError,
          [styles.inputIos]: isIOS,
          [styles.inputDisabled]: disabled
        })}
        name={name}
        mask={mask}
        id={id}
        type={type}
        value={value || ''}
        placeholder={placeholder}
        disabled={disabled}
        onChange={event => {
          onChange(event.target.value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        autoComplete={autoComplete}
      />
      {isError && <div className={styles.error}>{error}</div>}
    </div>
  );
};

/**
 * Defaults props
 */
Text.defaultProps = {
  type: 'text',
  mask: '',
  onChange: () => {},
  autoComplete: 'on'
};

export { Text };

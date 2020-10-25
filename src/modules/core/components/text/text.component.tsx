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
  theme,
  autoComplete
}) => {
  const [focused, setFocused] = useState(false);

  /**
   * Removing leading white spaces (expand in the future)
   */
  const processValue = (value: string) => {
    const result: string = value.replace(/^ +/gm, '');

    return result;
  };

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
          [styles.inputDisabled]: disabled,
          [styles.secondaryTheme]: theme === 'secondary'
        })}
        name={name}
        mask={mask}
        id={id}
        type={type}
        value={value ? value : ''}
        placeholder={placeholder}
        disabled={disabled}
        onChange={event => {
          const { value } = event.target;
          const result = processValue(value);
          onChange(result);
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
  theme: 'primary',
  type: 'text',
  mask: '',
  onChange: () => {},
  autoComplete: 'on'
};

export { Text };

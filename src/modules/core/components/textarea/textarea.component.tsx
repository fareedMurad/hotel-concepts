import classNames from 'classnames';
import * as React from 'react';
import { Label } from '../label';
import { TextareaProps } from './textarea.props';
import * as styles from './textarea.scss';
import { useState } from 'react';

/**
 * Renders Textarea
 */
const Textarea: React.FC<TextareaProps> = ({
  className,
  value,
  onChange,
  disabled,
  error,
  isError,
  placeholder,
  label,
  theme
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.focused]: focused
      })}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <textarea
        className={classNames(styles.textarea, {
          [styles.secondaryTheme]: theme === 'secondary'
        })}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
      {isError && <div className={styles.error}>{error}</div>}
    </div>
  );
};

Textarea.defaultProps = {
  theme: 'primary',
  onChange: () => {}
};

export { Textarea };

import * as React from 'react';
import { RadioProps } from './radio.props';
import * as styles from './radio.scss';
import classNames from 'classnames';
import { Label } from '../label';

/**
 * Renders Radio
 */
const Radio: React.FC<RadioProps> = ({
  value,
  label,
  data,
  onChange,
  disabled,
  whiteBackground,
  className,
  children,
  isError,
  error,
  direction
}) => {
  const [selected, setSelected] = React.useState('');
  return (
    <div className={className} style={{ flexDirection: direction }}>
      <div className={styles.label}>{label && <Label>{label}</Label>}</div>

      {data.map(({ id, caption }, index) => (
        <div key={index} className={styles.container}>
          <div
            className={classNames(styles.radio, {
              [styles.radioSelected]: selected === caption
            })}
            onClick={() => {
              setSelected(caption);
              onChange(selected);
            }}
          />

          {caption}
        </div>
      ))}

      {isError && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export { Radio };

/**
 * Radio props
 */
Radio.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  className: '',
  onTouch: () => {},
  disabled: false
};

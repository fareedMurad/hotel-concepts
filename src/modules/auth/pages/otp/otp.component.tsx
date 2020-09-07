import * as React from 'react';
import { OtpProps } from './otp.props';
import * as styles from './otp.scss';
import OtpInput from 'react-otp-input';
import { Label, Button } from '@core/components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

/**
 * Renders Otp
 */
const Otp: React.FC<OtpProps> = ({}) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!value) return;

    // dispatch(otp(value))
    console.log(value);
  };

  return (
    <div className={styles.otp}>
      <Label>Otp</Label>
      <OtpInput
        containerStyle={styles.input}
        value={value}
        onChange={(value: string) => setValue(value)}
        numInputs={6}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export { Otp };

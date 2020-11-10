import { Checkbox, CheckboxGroup } from '../checkbox';
import { Radio, RadioGroup } from '../radio';
import { Select } from '../select';
import { Switch } from '../switch';
import { Tabs } from '../tabs';
import { Text } from '../text';
import { Textarea } from '../textarea';
import { withField } from '@core/shared/formik';

/**
 * Group of wrapped components, with props provided according formik context
 */
const Field = {
  Text: withField(Text),
  Checkbox: withField(Checkbox),
  CheckboxGroup: withField(CheckboxGroup),
  Switch: withField(Switch),
  Select: withField(Select),
  Tabs: withField(Tabs),
  Radio: withField(Radio),
  RadioGroup: withField(RadioGroup),
  TextArea: withField(Textarea)
};

export { Field };

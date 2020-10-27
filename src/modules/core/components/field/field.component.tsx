import { withField } from '@core/shared/formik';
import { Checkbox, CheckboxGroup } from '../checkbox';
import { Text } from '../text';
import { Switch } from '../switch';
import { Select } from '../select';
import { Tabs } from '../tabs';
import { Radio, RadioGroup } from '../radio';
import { Textarea } from '../textarea';

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

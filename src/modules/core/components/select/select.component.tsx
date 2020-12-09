import * as React from 'react';
import { useRef } from 'react';
import { SelectProps } from './select.props';
import * as styles from './select.scss';
import ReactSelect, { components as Components } from 'react-select';
import { useState } from 'react';
import { Option } from '@core/models';
import { Label } from '../label';
import classNames from 'classnames';
import { Icon } from '../icon';
import { capitalize, useClickOutside } from '@core/shared';

/**
 * Sub component with class name
 */
const withClassName = (className: string) => ({
  children,
  innerProps
}: {
  children: any;
  innerProps?: any;
}) => (
  <div {...innerProps} className={className}>
    {children}
  </div>
);

/**
 * Select parts
 */
const components: Partial<typeof Components> = {
  Menu: withClassName(styles.dropdown),
  ClearIndicator: () => null,
  IndicatorSeparator: () => null,
  SingleValue: withClassName(styles.singleValue),
  Control: withClassName(styles.control),
  MenuList: withClassName(styles.menuList),
  Placeholder: withClassName(styles.placeholder),
  ValueContainer: withClassName(styles.valueContainer),
  SelectContainer: withClassName(styles.selectContainer),
  DropdownIndicator: () => (
    <div>
      <Icon name='arrow-down-g' />
    </div>
  ),
  NoOptionsMessage: props => (
    <div className={styles.noOptions}>
      {props.selectProps.inputValue
        ? 'No matches were found'
        : 'No options were found'}
    </div>
  )
};

/**
 * Renders Select
 */
const Select: React.FC<SelectProps> = ({
  controlClassname,
  labelClassname,
  className,
  options,
  isError,
  error,
  value,
  label,
  defaultLabel,
  onChange,
  placeholder,
  searchable,
  disabled,
  theme,
  allowSearch
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isOptions = options?.length > 0;
  useClickOutside(ref, () => setVisible(false));
  /**
   * Get option value
   */
  const getOptionValue = () => {
    const match = options?.find(one => one.value == value);
    return match ? match?.label : defaultLabel;
  };
  const [handledSearch, setHandledSearch] = useState(getOptionValue() || '');

  /**
   * Handle empty value
   */
  React.useEffect(() => {
    if (!handledSearch) {
      onChange('');
    }
  }, [handledSearch]);

  return (
    <div>
      {label && (
        <Label className={classNames(styles.label, labelClassname)}>
          {label}
        </Label>
      )}
      <div
        className={classNames(
          styles.select,
          className,
          styles['select' + capitalize(theme)],
          {
            [styles.selectFocused]: visible,
            [styles.selectDisabled]: disabled,
            [styles.selectError]: isError,
            [styles.selectSecondary]: theme === 'secondary'
          }
        )}
        ref={ref}
        onClick={() => !disabled && setVisible(!visible)}
      >
        <div className={classNames(styles.box, controlClassname)}>
          <div className={styles.control}>
            {allowSearch ? (
              <input
                type='text'
                className={styles.searchInput}
                value={handledSearch}
                onChange={e => setHandledSearch(e.target.value)}
              />
            ) : (
              <React.Fragment>
                {/* without search */}
                {value ? (
                  <div className={styles.value}>{getOptionValue()}</div>
                ) : (
                  <div className={styles.value}>{defaultLabel}</div>
                )}
              </React.Fragment>
            )}
          </div>
          {!disabled && (
            <div className={styles.indicator}>
              <Icon
                className={classNames(styles.indicatorArrow, {
                  [styles.indicatorArrowReversed]: visible
                })}
                name='arrow-down-g'
              />
            </div>
          )}

          {visible && (
            <div className={styles.menu}>
              {isOptions ? (
                <React.Fragment>
                  {options.map(({ label, value }) => (
                    <div
                      className={styles.option}
                      onClick={() => {
                        onChange(value);
                        setVisible(false);
                      }}
                      key={value}
                    >
                      {label}
                    </div>
                  ))}
                </React.Fragment>
              ) : (
                <div className={styles.placeholder}>No options</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  theme: 'primary'
};

export { Select };

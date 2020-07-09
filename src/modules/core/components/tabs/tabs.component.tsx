import * as React from 'react';
import { TabsProps } from './tabs.props';
import * as styles from './tabs.scss';
import classNames from 'classnames';
import { Label } from '../label';
import { Icon } from '../icon';

/**
 * Renders Tabs
 */
const Tabs: React.FC<TabsProps> = ({
  data,
  className,
  value,
  onChange,
  label,
  isError,
  error,
  description
}) => (
  <div className={classNames(className, styles.tabs)}>
    {label && <Label>{label}</Label>}
    <div className={styles.container}>
      {data.map(({ id, caption, description }, index) => (
        <div
          className={classNames(styles.tab, {
            [styles.tabSelected]: id == value
          })}
          key={index}
          onClick={() => {
            onChange(id);
          }}
        >
          {id === value ? (
            <Icon name='ellipse-active' />
          ) : (
            <Icon name='ellipse-default' />
          )}
          <div className={styles.content}>
            <div
              className={classNames(styles.caption, {
                [styles.captionSelected]: id == value
              })}
            >
              {caption}
            </div>{' '}
            <div className={styles.description}>{description} </div>
          </div>
        </div>
      ))}
    </div>
    {isError && <div className={styles.error}>{error}</div>}
  </div>
);

export { Tabs };

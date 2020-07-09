import * as React from 'react';
import { HeroCaptionProps } from './hero-caption.props';
import * as styles from './hero-caption.scss';
import classNames from 'classnames';
import { Icon, H2, Paragraph } from '@core/components';

/**
 * Renders HeroCaption
 */
const HeroCaption: React.FC<HeroCaptionProps> = ({
  className,
  title,
  description,
  id
}) => {
  return (
    <div className={classNames(styles.caption, className)} id={id}>
      <Icon name='abstract-1' />
      <H2>{title}</H2>
      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};

export { HeroCaption };

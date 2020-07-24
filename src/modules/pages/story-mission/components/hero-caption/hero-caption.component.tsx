import * as React from 'react';
import { HeroCaptionProps } from './hero-caption.props';
import * as styles from './hero-caption.scss';
import classNames from 'classnames';
import { Icon, Paragraph, SectionTitle } from '@core/components';

/**
 * Renders HeroCaption
 */
const HeroCaption: React.FC<HeroCaptionProps> = ({
  className,
  title,
  description,
  id
}) => (
  <div className={classNames(styles.heroCaption, className)} id={id}>
    <Icon name='abstract-1' />
    <SectionTitle>{title}</SectionTitle>
    {description && <Paragraph>{description}</Paragraph>}
  </div>
);

export { HeroCaption };

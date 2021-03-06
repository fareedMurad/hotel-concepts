import * as React from 'react';
import * as styles from './typography.scss';
import classNames from 'classnames';
import { HeadingProps, ParagraphProps } from './typography.props';

/**
 * Renders h1
 */
const H1: React.FC<HeadingProps> = ({ className, children }) => (
  <h1 className={classNames(className, styles.h1)}>{children}</h1>
);

/**
 * Renders h2
 */
const H2: React.FC<HeadingProps> = ({ className, children }) => (
  <h2 className={classNames(className, styles.h2)}>{children}</h2>
);

/**
 * Renders h3
 */
const H3: React.FC<HeadingProps> = ({ className, children }) => (
  <h3 className={classNames(className, styles.h3)}>{children}</h3>
);

/**
 * Renders h1
 */
const H4: React.FC<HeadingProps> = ({ className, children }) => (
  <h4 className={classNames(className, styles.h4)}>{children}</h4>
);

/**
 * Renders h5
 */
const H5: React.FC<HeadingProps> = ({ className, children }) => (
  <h5 className={classNames(className, styles.h5)}>{children}</h5>
);

/**
 * Renders h6
 */
const H6: React.FC<HeadingProps> = ({ className, children }) => (
  <h6 className={classNames(className, styles.h6)}>{children}</h6>
);
/**
 * Renders paragraph
 */
const Paragraph: React.FC<ParagraphProps> = ({ className, children, sm }) => (
  <p
    className={classNames(className, styles.p, {
      [styles.sm]: sm
    })}
  >
    {children}
  </p>
);
/**
 * Renders pre-caption
 */
const PreCaption: React.FC<{ children: any; className?: string }> = ({
  children,
  className
}) => (
  <div className={classNames(styles.preCaption, className)}>{children}</div>
);
/**
 * Hero Title
 */
const HeroTitle: React.FC<{ children: any; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={classNames(styles.heroTitle, className)}>{children}</div>
  );
};
/**
 * Hero Title
 */
const HeroSubtitle: React.FC<{ children: any; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={classNames(styles.heroSubtitle, className)}>{children}</div>
  );
};
/**
 * Section title
 */
const SectionTitle: React.FC<{ children: any; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={classNames(styles.sectionTitle, className)}>{children}</div>
  );
};
/**
 * Hr
 */
const Hr: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={classNames(styles.hr, className)} />;
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  PreCaption,
  HeroTitle,
  SectionTitle,
  HeroSubtitle,
  Hr
};

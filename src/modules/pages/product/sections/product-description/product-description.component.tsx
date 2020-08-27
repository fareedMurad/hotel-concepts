import * as React from 'react';
import { ProductDescriptionProps } from './product-description.props';
import * as styles from './product-description.scss';
import { H2, Paragraph } from '@core/components';
import Moment from 'react-moment';

/**
 * Renders ProductDescription
 */
const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  const { publishDate, skills } = product;
  return (
    <div className={styles.productDescription}>
      <div className={styles.productDescriptionBlock}>
        <H2>Product Description</H2>
        <div className={styles.productDescriptionAdditional}>
          <h1>Publication Date:</h1>
          <Paragraph>
            <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
          </Paragraph>
        </div>
        <div className={styles.productDescriptionBlockText}>
          <p>
            Help your people reach their potential. As a manager, it’s your
            responsibility to ensure your team is motivated and performing at a
            high level. But recent data reveals abysmal engagement levels among
            workers around the globe. How do you fix the problem—before your
            most talented people walk out the door? By understanding what drains
            your employees, you can increase their job satisfaction and push
            them toward achieving their goals. „The HBR Guide to Motivating
            People” provides practical tips and advice to help your team find
            meaning in their work, build on their strengths, and produce the
            best results for the organization. You’ll learn how to: Pinpoint the
            root causes of lackluster performance; Tailor rewards and
            recognition to individuals; Connect routine work activities to a
            higher purpose; Support your employees’ growth and development;
            Prevent burnout—especially in your top performers; Create a culture
            of engagement.
          </p>
          <p>
            These tools are intended for individual use only. To download this
            product after your purchase, simply sign in to hbr.org and visit the
            „Orders” section of your account. If you’d like to purchase multiple
            copies of this Ebook and its accompanying tools to share with your
            team or learn more about volume discounts for organizations, please
            contact Lindsey.Dietrich@harvardbusiness.org.
          </p>
        </div>
        <div className={styles.productDescriptionAdditional}>
          <h1>Product:</h1>
          <Paragraph>
            <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
          </Paragraph>
        </div>
        <div className={styles.productDescriptionAdditional}>
          <h1>Page:</h1>
          <Paragraph>
            <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
          </Paragraph>
        </div>
      </div>
      <div className={styles.skillCovered}>
        <div className={styles.skills}>
          <div>Skills covered</div>
          {skills.map((item, index) => (
            <div className={styles.item} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductDescription };

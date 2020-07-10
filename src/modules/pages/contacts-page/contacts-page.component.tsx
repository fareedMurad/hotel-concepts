import * as React from 'react';
import { ContactsPageProps } from './contacts-page.props';
import * as styles from './contacts-page.scss';
import { Header } from '@core/components/header';
import { H2 } from '@core/components';
import { useContactsPageData } from './contacts-page.hook';

const Card = ({ title, description, href, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDescription}>{description}</div>
      <a href={href} className={styles.cardLink}>
        {link}
      </a>
    </div>
  );
};
/**
 * Renders ContactsPage
 */
const ContactsPage: React.FC<ContactsPageProps> = ({}) => {
  const { data } = useContactsPageData();

  return (
    <div className={styles.contactsPage}>
      <header className={styles.header}>
        <Header whiteBackground />
      </header>
      <div className={styles.container}>
        <div>We're here to help!</div>
        <H2>Contact Us</H2>
      </div>
      <section className={styles.cardsList}>
        {data.map(({ id, title, description, href, link }) => (
          <Card
            title={title}
            description={description}
            href={href}
            link={link}
            key={id}
          />
        ))}
      </section>
    </div>
  );
};

export { ContactsPage };

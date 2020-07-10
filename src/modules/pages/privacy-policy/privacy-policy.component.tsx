import * as React from 'react';
import { PrivacyPolicyProps } from './privacy-policy.props';
import * as styles from './privacy-policy.scss';
import { Header } from '@core/components/header';
import { H2, Paragraph } from '@core/components';
import { usePrivacyPolicyData } from './privacy-policy.hook';
/**
 * Renders Block
 */
const Block: React.FC<{
  id: string;
  title: string;
  description?: string;
}> = ({ id, title, description }) => {
  return (
    <div className={styles.block}>
      <div className={styles.blockId}>{id}</div>
      <div className={styles.blockTitle}>{title}</div>
      <Paragraph className={styles.blockDescription} sm>
        {description}
      </Paragraph>
    </div>
  );
};
/**
 * Renders PrivacyPolicy
 */
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  const { list } = usePrivacyPolicyData();

  return (
    <div className={styles.privacyPolicy}>
      <header className={styles.header}>
        <Header whiteBackground />
      </header>
      <main className={styles.container}>
        <H2 className={styles.title}>Privacy policy</H2>
        <Block
          id='1.0'
          title='Overview'
          description='Dribbble Holdings Ltd. (“Dribbble”, “we”, “us” or “our”) is committed to protecting the privacy of personal information (i.e. any information relating to an identified or identifiable natural person) who visit the https://dribbble.com website and Dribbble mobile software application (collectively, the “Site”) and use the services available thereon (the “Services”). Amendments to this Privacy Policy will be posted to the Site and/or Services and will be effective when posted. Your continued use of the Site and/or Services following the posting of any amendment to this Privacy Policy shall constitute your acceptance of such amendment.'
        />
        <div className={styles.block}>
          <div className={styles.blockId}>2.0</div>
          <div className={styles.blockTitle}>
            Consent and Information Collection and Use
          </div>
          <Paragraph sm>
            When you register as a user of our Site and Services, we ask for
            personal information that will be used to activate your account,
            provide the Services to you, communicate with you about the status
            of your account, and for other purposes set out in this Privacy
            Policy. Your name, company name, address, telephone number, email
            address, credit card information and certain other information about
            you may be required by us to provide the Services or be disclosed by
            you during your use of the Services. You will also be asked to
            create a user name and private password, which will become part of
            your account information.
          </Paragraph>
          <Paragraph sm>
            By providing personal information to us and by retaining us to
            provide you with the Services, you voluntarily consent to the
            collection, use and disclosure of such personal information as
            specified in this Privacy Policy. The legal bases for our processing
            of personal information are primarily that the processing is
            necessary for providing the Services and that the processing is
            carried out in our legitimate interests, which are further explained
            below. Without limiting the foregoing, we may on occasion ask you to
            consent when we collect, use, or disclose your personal information
            in specific circumstances.
          </Paragraph>
          <Paragraph sm>
            We take steps designed to ensure that only those employees who need
            access to your personal information to fulfil their employment
            duties will have access to it. We may use and disclose your personal
            or account information for the following purposes:
          </Paragraph>
          <Paragraph sm>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Paragraph>
          <Paragraph sm>
            When we disclose your personal information to third parties, we take
            reasonable measures to ensure that the rules set forth in this
            Privacy Policy are complied with and these third parties provide
            sufficient guarantees to implement appropriate technical and
            organisational measures.
          </Paragraph>
          <Paragraph sm>
            Your personal information may be stored and processed in any country
            where we have facilities or in which we engage third party service
            providers. By using the Services, you consent to the transfer of
            information to countries outside your country of residence, which
            may have different data protection rules than in your country. While
            such information is outside of Canada, it is subject to the laws of
            the country in which it is held, and may be subject to disclosure to
            the governments, courts or law enforcement or regulatory agencies of
            such other country, pursuant to the laws of such country. However,
            our practices regarding your personal information will at all times
            continue to be governed by this Privacy Policy and, if applicable,
            we will comply with the General Data Protection Regulation (“GDPR”)
            requirements providing adequate protection for the transfer of
            personal information from the EU/EEA to third country.
          </Paragraph>
          <Paragraph sm>
            We may occasionally communicate with you regarding our products,
            services, news and events. You have the option to not receive this
            information. We provide an opt-out function within all email
            communications of this nature, or will cease to communicate with you
            for this purpose if you contact us and tell us not to communicate
            this information to you. The only kind of these communications that
            you may not “opt-out” of are those required to communicate
            announcements related to the Services, including information
            specific to your Account, planned Services suspensions and outages.
            We will attempt to minimize this type of communication to you.
          </Paragraph>
          <Block id='3.0' title='Age of Consent' />
          <Paragraph sm>
            We do not knowingly provide the Services to, and will not knowingly
            collect the personal information from anyone under the age of
            consent. If you live in a country in the EU/EEA, you must be at
            least 16 years old to use our Services or such greater age required
            in your country to register for or use our Services. If you live in
            any other country except those in the EU/EEA, you must be at least
            13 years old to use our Services or such greater age required in
            your country to register for or use our Services. In addition to
            being of the minimum required age to use our Services under
            applicable law, if you are not old enough to have authority to agree
            to our Privacy Policy in your country, your parent or guardian must
            agree to our Privacy Policy on your behalf. If you have any concerns
            about your child’s personal information, please contact us at
            privacy@dribbble.com.
          </Paragraph>
          <Paragraph sm>
            Neither the Site nor the Services are intended for children under 13
            years of age, and no one under age 13 may provide any personal
            information to, on or through the Site or Services. We do not
            knowingly collect personal information from children under 13. If
            you are under 13, do not use or provide any information to, on or
            through the Site or Services, make any purchases through the Site or
            Services, use any of the interactive or public comment features, or
            provide any information about yourself to us, including your name,
            address, telephone number, email address, or any screen name or user
            name you may use. If we learn we have collected or received personal
            information from a child under 13 without verification of parental
            consent, we will delete that information. If you believe we might
            have any information from or about a child under 13, please contact
            us at the email address provided in the paragraph above.
          </Paragraph>
          <Block id='4.0' title='Rights to Your Information' />
          <Paragraph sm>
            We do not knowingly provide the Services to, and will not knowingly
            collect the personal information from anyone under the age of
            consent. If you live in a country in the EU/EEA, you must be at
            least 16 years old to use our Services or such greater age required
            in your country to register for or use our Services. If you live in
            any other country except those in the EU/EEA, you must be at least
            13 years old to use our Services or such greater age required in
            your country to register for or use our Services. In addition to
            being of the minimum required age to use our Services under
            applicable law, if you are not old enough to have authority to agree
            to our Privacy Policy in your country, your parent or guardian must
            agree to our Privacy Policy on your behalf. If you have any concerns
            about your child’s personal information, please contact us at
            privacy@dribbble.com.
          </Paragraph>
          <Paragraph sm>
            Neither the Site nor the Services are intended for children under 13
            years of age, and no one under age 13 may provide any personal
            information to, on or through the Site or Services. We do not
            knowingly collect personal information from children under 13. If
            you are under 13, do not use or provide any information to, on or
            through the Site or Services, make any purchases through the Site or
            Services, use any of the interactive or public comment features, or
            provide any information about yourself to us, including your name,
            address, telephone number, email address, or any screen name or user
            name you may use. If we learn we have collected or received personal
            information from a child under 13 without verification of parental
            consent, we will delete that information. If you believe we might
            have any information from or about a child under 13, please contact
            us at the email address provided in the paragraph above.
          </Paragraph>
          <Block
            id='5.0'
            title='Your California Privacy Rights'
            description='California Civil Code Section §1798.83 permits users of the Site and/or Services who are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to [email] with “Request for California Privacy Information” in the subject line and in the body of your message. We will provide the requested information to you in your email address in response.'
          />
          <Block
            id='6.0'
            title='Aggregated Data'
            description='We may also use your personal information to generate Aggregated Data for internal use and for sharing with others on a selective basis. “Aggregated Data” means records which have been stripped of information potentially identifying users, and which have been manipulated or combined to provide generalized, anonymous information. Your identity and personal information will be kept anonymous in Aggregated Data.'
          />
          <Block
            id='7.0'
            title='Links'
            description='The Site and/or Services may contain links to other sites and we are not responsible for the privacy 
practices or the content of such sites. We encourage you to read the privacy policy of linked sites. Their 
privacy policies and practices differ from our policies and practices.'
          />
          <Block
            id='8.0'
            title='Cookies and Log Files'
            description='We use cookies and log files to track user information. Cookies are small amounts of data that are 
transferred to your web browser by a web server and are stored on your computer’s hard drive. We use 
cookies to track which page variant a visitor has seen, to track if a visitor has clicked on a page variant, 
to monitor traffic patterns and to gauge popularity of service options. We will use this information to 
deliver relevant content and services to you.'
          />
          <Block
            id='9.0'
            title='Third Parties’ & Interest-Based Ads'
            description='We do not control third parties’ collection or use of your information to serve interest-based advertising. 
            However, these third parties may provide you with ways to choose not to have your information collected 
            or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising 
            Initiative (“NAI”) on the NAI’s website.'
          />
          <Block
            id='10.0'
            title='Change of Ownership or Business Transition'
            description='In the event of a change of ownership or other business transition, such as a merger, acquisition or sale 
            of our assets, your information may be transferred in accordance with applicable privacy laws.'
          />
          <Block id='11.0' title='Security and Retention' />
          <Paragraph sm>
            We will strive to prevent unauthorized access to your personal
            information, however, no data transmission over the Internet, by
            wireless device or over the air is guaranteed to be 100% secure. We
            have implemented and maintain reasonable security procedures and
            practices (based on the nature of the information we collect) to
            protect that information from unauthorized disclosure. We will
            continue to enhance security procedures as new technologies and
            procedures become available. We strongly recommend that you do not
            disclose your password to anyone.
          </Paragraph>
          <Paragraph sm>
            Please remember that you control what personal information you
            provide while using the Site and Services. Ultimately, you are
            responsible for maintaining the secrecy of your identification,
            passwords and/or any personal information in your possession for the
            use of the Site and/or Services. Always be careful and responsible
            regarding your personal information. We are not responsible for, and
            cannot control, the use by others of any information which you
            provide to them and you should use caution in selecting the personal
            information you provide to others through the Site or Services.
            Similarly, we cannot assume any responsibility for the content of
            any personal information or other information which you receive from
            other users through the Site or Services, and you release us from
            any and all liability in connection with the contents of any
            personal information or other information which you may receive
            using the Site or Services. We cannot guarantee, or assume any
            responsibility for verifying, the accuracy of the personal
            information or other information provided by any third party. You
            release us from any and all liability in connection with the use of
            such personal information or other information of others.
          </Paragraph>
          <Paragraph sm>
            We will maintain your personal information for as long as they are
            needed, or as required by applicable laws, regulations, or
            government orders.
          </Paragraph>
          <Block
            id='12.0'
            title='Changes to this Policy'
            description='We may update this Privacy Policy from time to time. If we do so, we will send an email to users 
subscribed to the Company News list. We will also add a site banner alerting users who may not be 
subscribed. If the change materially effects the treatment of your personal data, and we have your 
email but you are not subscribed to the Company News list, we will send you an email. (You are 
responsible for ensuring that we have an up-to-date email for this purpose.)'
          />
          <Block
            id='13.0'
            title='Contact Us'
            description='If you have any questions or comments about this Privacy Policy or your personal information, to 
make an access or correction request, to exercise any applicable rights, to make a complaint, or to 
obtain information about our policies and practices with respect to any service providers outside 
Canada, our Privacy Officer (or Data Protection Officer) can be reached by mail or email using the 
following contact information: by email at privacy@dribbble.com or by mail at 524 Yates St., 
Victoria, BC, V8W 1K8, Canada.'
          />
        </div>
      </main>
    </div>
  );
};

export { PrivacyPolicy };

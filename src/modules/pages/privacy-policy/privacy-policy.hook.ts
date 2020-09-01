import { useTranslation } from 'react-i18next';

const usePrivacyPolicyData = () => {
  const { t } = useTranslation();
  const list = [
    t('privacy-policy.block2.list.item1'),
    t('privacy-policy.block2.list.item2'),
    t('privacy-policy.block2.list.item3'),
    t('privacy-policy.block2.list.item4'),
    t('privacy-policy.block2.list.item5'),
    t('privacy-policy.block2.list.item6'),
    t('privacy-policy.block2.list.item7'),
    t('privacy-policy.block2.list.item8'),
    t('privacy-policy.block2.list.item9'),
    t('privacy-policy.block2.list.item10')
  ];
  return { list };
};

export { usePrivacyPolicyData };

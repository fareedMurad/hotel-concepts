import { useTranslation } from 'react-i18next';
const PricingData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      imgSrc: `img/pay1.png`
    },
    {
      id: 2,
      imgSrc: `img/pay2.png`
    },
    {
      id: 3,
      imgSrc: `img/pay3.png`
    },
    {
      id: 4,
      imgSrc: `img/pay4.png`
    }
  ];

  return { data };
};

export { PricingData };

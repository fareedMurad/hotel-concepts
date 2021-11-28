import { useTranslation } from 'react-i18next';
const TestimonialsData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      imgSrc: `img/author-1.png`,
      description: t('hotel-concepts.testimonials.card.item1.description'),
      name: t('hotel-concepts.testimonials.card.item1.name'),
      location: t('hotel-concepts.testimonials.card.item1.location')
    },
    {
      id: 2,
      imgSrc: `img/author-1.png`,
      description: t('hotel-concepts.testimonials.card.item2.description'),
      name: t('hotel-concepts.testimonials.card.item1.name'),
      location: t('hotel-concepts.testimonials.card.item1.location')
    }
  ];

  return { data };
};

export { TestimonialsData };

import { gql, useQuery } from '@apollo/client';

const useOurMissionVisionData = () => {
  const programs = [
    {
      id: 1,
      rate: '1.0',
      caption: 'Marketing Fundamentals',
      description:
        'Early career or senior leadership focus. Whatever your  ambitions, we have a programme to suit your needs.'
    },
    {
      id: 2,
      rate: '2.0',
      caption: 'Our Experts',
      description:
        'Our expert program team brings to life the learning solution which we have cocreated, working hard to match your ambition and needs.'
    },
    {
      id: 3,
      rate: '3.0',
      caption: 'Our Work with Organisations',
      description:
        'Unlock your organisation’s potential. Discover how partnering with Kordie can help you achieve your business goals.'
    }
  ];

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "4wz0YIrLImvhzdTiOFfVwW") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return {
    programs,
    ourMissionImage: data?.asset?.url
  };
};

export { useOurMissionVisionData };

import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
const useLearningModelData = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';

  const cardData = [
    {
      id: 1,
      title: '100+ network of expert instructors',
      description:
        'Learn from highly vetted professional practitioners — the people who use the skills they teach in their own jobs.'
    },
    {
      id: 2,
      title: 'Quality over quantity',
      description:
        'Lessons and case studies delivered through 3-4 hours of high quality video and additional interactive materials, not 20-30 hours of so-so materials.'
    },
    {
      id: 3,
      title: 'Applicable at work',
      description:
        'Constructs and frameworks that align to today’s hospitality business challenges, with relevant, timely case studies that put insights into action.'
    },
    {
      id: 4,
      title: 'Curriculum partners',
      description:
        'Our proprietary content is co-created with industry leaders, not academics, ensuring workplace relevance. Each concept has a single course designed for exceptional quality, eliminating guesswork in selecting the right one.'
    },
    {
      id: 5,
      title: 'Case-based learning',
      description:
        'Learn by doing with experiential projects that reflect real- world professional scenarios. Develop job-ready skills along with knowledge and confidence.'
    },
    {
      id: 6,
      title: 'Personalised feedback',
      description:
        'Get individualised, line-by-line feedback from mentors and technical support whenever you need it. Validate exactly which skills are successfully learned and identify opportunities for improvement.'
    }
  ];

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "3rniPZ6PNTr2w1me4TqAMx") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return { cardData, imageUrl };
};

export { useLearningModelData };

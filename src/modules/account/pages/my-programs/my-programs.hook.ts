import { navigate } from '@router/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useMyProgramsData = () => {
  const dispatch = useDispatch();
  const programs = [
    {
      name: 'Program Name',
      level: 'middle',
      weeks: '8',
      sprints: '10',
      price: '200',
      description:
        'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited.',
      picture:
        'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-151597880.jpg?itok=rB2itzVq',
      id: 1143132,
      purchased: false
    },
    {
      name: 'Program Name',
      level: 'middle',
      weeks: '8',
      sprints: '10',
      price: '200',
      description:
        'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited.',
      picture:
        'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-151597880.jpg?itok=rB2itzVq',
      id: 5234,
      purchased: true
    },
    {
      name: 'Program Name',
      level: 'middle',
      weeks: '8',
      sprints: '10',
      price: '200',
      description:
        'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited.',
      picture:
        'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-151597880.jpg?itok=rB2itzVq',
      id: 234,
      purchased: false
    }
  ];

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Programs', to: '/purchased' },
    { label: 'Wishlist', to: '/wishlist', withIcon: true }
  ];

  /**
   * TODO possible can be done better
   */
  useEffect(() => {
    dispatch(navigate('/account/programs/purchased'));
  }, []);

  return { programs, navigation };
};

export { useMyProgramsData };

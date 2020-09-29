import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useProgramsMenuData } from './programs.hook';

const useHeaderMainData = () => {
  const { language } = useSelector((state: State) => state.localization);
  const { programsData, programsLoading } = useProgramsMenuData(language);

  const menus = [
    {
      name: 'Programs',
      programs: programsData,
      content: {
        flexDirection: 'column',
        links: [
          {
            name: 'Learning Approach',
            image: 'src/assets/img/header-image.png',
            to: '/learning-approach'
          }
        ]
      }
    },
    {
      name: 'E-library',
      content: {
        flexDirection: 'row',
        title: {
          name: 'Explore',
          to: '/marketplace'
        },

        links: [
          {
            name: 'Individual Subscription',
            image: 'src/assets/img/header-image.png',
            to: ''
          },
          {
            name: 'Corporate Subscription',
            image: 'src/assets/img/header-image.png',
            tp: '/for-companies'
          }
        ]
      }
    },
    {
      name: 'Corporate solutions',
      content: {
        flexDirection: 'column',
        links: [
          {
            name: 'Online programs',
            image: 'src/assets/img/header-image.png',
            to: '/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h'
          },
          {
            name: 'E-library Acess',
            image: 'src/assets/img/header-image.png',
            to: '/marketplace'
          }
        ]
      }
    }
  ];
  return { menus };
};
export { useHeaderMainData };

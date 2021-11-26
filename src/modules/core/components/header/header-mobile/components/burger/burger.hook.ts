import { auth } from '@app/redux/auth';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { useProgramsMenuData } from '../../../header-main/hooks/programs.hook';

const useBurgerData = () => {
  const {
    localization: { language },
    auth: { authorized }
  } = useSelector((state: State) => state);
  const { programsData } = useProgramsMenuData(language);

  const programsLinks = [];
  programsData?.map(program =>
    programsLinks.push({
      link: program.name,
      to: `/programs-catalogue/${program.sys.id}`
    })
  );

  const menus = [
    {
      title: 'Profile',
      height: 386,
      menuLinks: [
        {
          link: 'My account',
          to: '/account/profile'
        },
        {
          link: 'My library',
          to: '/account/library'
        },
        {
          link: 'My subscriptions',
          to: '/accoune/subscriptions'
        },
        {
          link: 'My programs',
          to: '/account/programs'
        }
      ]
    },
    {
      title: 'Online Programs',
      height: 480,
      menuLinks: [
        ...programsLinks,
        {
          link: 'Learning Approach',
          to: '/learning-approach',
          highlighted: true
        }
      ]
    },
    // {
    //   title: 'Digital Library',
    //   height: 284,
    //   menuLinks: [
    //     {
    //       link: 'Explore digital collections',
    //       to: '/marketplace'
    //     },
    //     {
    //       link: 'Individual Subscription',
    //       to: '',
    //       highlighted: true
    //     },
    //     {
    //       link: 'Corporate Subscription',
    //       to: '',
    //       highlighted: true
    //     }
    //   ]
    // },
    {
      title: 'Corporate solutions',
      height: 63,
      menuLinks: null
    },
    {
      title: 'About',
      height: 63,
      menuLinks: null
    }
  ];

  /*
   *  if user unauthorized remove profile menu
   */
  !authorized && menus.shift();

  return { menus, authorized };
};

export { useBurgerData };

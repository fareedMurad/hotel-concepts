import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useProgramsMenuData } from './programs.hook';
import { useHistory } from 'react-router';
import { ProgramsMenu } from '../menus/programs-menu';

const useHeaderMainData = () => {
  const {
    localization: { language },
    cart: { selectedProducts, addedProduct },
    header: { isBackgroundWhite }
  } = useSelector((state: State) => state);
  const { programsData } = useProgramsMenuData(language);
  const {
    location: { pathname }
  } = useHistory();
  const cartQuantity = selectedProducts?.length;

  const darkThemes = [
    'marketplace',
    'auth',
    'insights',
    'contact-us',
    'faq',
    'interests',
    'jobs',
    'privacy-policy',
    'category',
    'cart'
  ];

  const blackTheme = darkThemes.includes(pathname.split('/')[1]);

  return {
    cartQuantity,
    programsData,
    addedProduct,
    isBackgroundWhite,
    blackTheme
  };
};
export { useHeaderMainData };

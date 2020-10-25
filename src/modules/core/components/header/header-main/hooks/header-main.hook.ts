import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useProgramsMenuData } from './programs.hook';
import { useHistory, useLocation } from 'react-router';
import { ProgramsMenu } from '../menus/programs-menu';
import { useEffect, useState } from 'react';

const useHeaderMainData = () => {
  const {
    localization: { language },
    cart: { selectedProducts, addedProduct },
    header: { isBackgroundWhite }
  } = useSelector((state: State) => state);
  const { programsData } = useProgramsMenuData(language);
  const { pathname } = useLocation();
  const cartQuantity = selectedProducts?.length;
  const [whiteHeader, setWhiteHeader] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const darkThemes = [
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

  /*
   * handle on scroll theme change
   */
  useEffect(() => {
    window.addEventListener('scroll', () =>
      /*
       * make delay for passing secondary header
       */
      window.pageYOffset > 40 ? setStickyHeader(true) : setStickyHeader(false)
    );
    darkThemes.includes(pathname.split('/')[1])
      ? setWhiteHeader(true)
      : setWhiteHeader(false);
  }, [pathname]);

  return {
    cartQuantity,
    programsData,
    addedProduct,
    isBackgroundWhite,
    whiteHeader,
    stickyHeader
  };
};
export { useHeaderMainData };

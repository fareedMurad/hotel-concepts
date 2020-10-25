import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useProgramsMenuData } from './programs.hook';
import { matchPath, useHistory, useLocation } from 'react-router';
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
    '/marketplace/:id',
    '/auth',
    '/insights',
    '/contact-us',
    '/faq',
    '/interests',
    '/jobs',
    '/privacy-policy',
    '/category',
    '/cart'
  ];

  const match = matchPath(pathname, {
    path: darkThemes,
    exact: false,
    strict: false
  });

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
    match ? setWhiteHeader(true) : setWhiteHeader(false);
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

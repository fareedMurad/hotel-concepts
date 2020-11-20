import { State } from '@app/redux/state';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { matchPath, useLocation } from 'react-router';
import { useProgramsMenuData } from './programs.hook';

const useHeaderMainData = () => {
  const {
    localization: { language },
    cart: { products, addedProduct, showDropdown, selectedProducts }
  } = useSelector((state: State) => state);
  const { programsData } = useProgramsMenuData(language);
  const { pathname } = useLocation();
  const cartQuantity = products.filter(product => product !== undefined || null)
    .length;
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
    whiteHeader,
    stickyHeader,
    showDropdown,
    selectedProducts
  };
};
export { useHeaderMainData };

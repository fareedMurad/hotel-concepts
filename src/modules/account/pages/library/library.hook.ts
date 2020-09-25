import { navigate } from '@router/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useLibraryData = () => {
  const dispatch = useDispatch();
  const books = [
    {
      name: 'book name',
      wishSelected: false,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 1111,
      purchased: false
    },
    {
      name: 'book name',
      wishSelected: true,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 2222,
      purchased: false
    },
    {
      name: 'book name',
      wishSelected: true,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 3333,
      purchased: false
    },
    {
      name: 'book name',
      wishSelected: false,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 4444,
      purchased: false
    },
    {
      name: 'purchased ',
      wishSelected: true,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 5555,
      purchased: true
    },
    {
      name: 'book name',
      wishSelected: false,
      pdf:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      epub: 'http://files.infogridpacific.com/epub3/famouspaintings.epub',
      amazonKindle: 'any',
      picture: 'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg',
      id: 6666,
      purchased: false
    }
  ];

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Books', to: '/purchased' },
    { label: 'Wishlist', to: '/wishlist', withIcon: true }
  ];

  /**
   * TODO possible can be done better
   */
  useEffect(() => {
    dispatch(navigate('/account/library/purchased'));
  }, []);

  return { books, navigation };
};

export { useLibraryData };

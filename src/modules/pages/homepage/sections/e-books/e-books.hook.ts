import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { fetchMarketplace } from '@app/redux/marketplace';
import { useEffect } from 'react';
/*
 * E-book section data
 */

const useEBooksData = () => {
  const dispatch = useDispatch();
  const {
    marketplace: { categories, slider }
  } = useSelector((state: State) => state);

  useEffect(() => {
    dispatch(fetchMarketplace());
  }, []);

  const categoriesList = categories.map(i => ({
    category: i.category,
    count: i.total
  }));

  const filters = [
    'Social Media',
    'CRM',
    'Revenue management',
    'Trends',
    'Coming soon'
  ];

  const books = [
    {
      image: require('img/mock-books/ebook1.png'),
      price: '39.99',
      sale: '29.99',
      title: 'Tactics of Increasing Revenue'
    },
    {
      image: require('img/mock-books/ebook1.png'),
      price: '39.99',
      sale: '',
      title: 'Distribution and Channel Management'
    },
    {
      image: require('img/mock-books/ebook1.png'),
      price: '39.99',
      sale: '',
      title: 'Yielding the business to maximise profits'
    },
    {
      image: require('img/mock-books/ebook1.png'),
      price: '39.99',
      sale: '',
      title: 'Overbooking Policies'
    }
  ];

  return { filters, books, categories };
};

export { useEBooksData };

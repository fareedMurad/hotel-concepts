/*
 * E-book section data
 */

const useEBooksData = () => {
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

  return { filters, books };
};

export { useEBooksData };

const useMarketplaceData = () => {
  const maketplaceFiltersData = [
    { id: 1, title: 'Web templates', count: 256, anchor: 'web-templates' },
    { id: 2, title: 'Books', count: 12, anchor: 'books' },
    { id: 3, title: 'Tools', count: 24, anchor: 'tools' },
    { id: 4, title: 'Case studies', count: 4, anchor: 'case-study' },
    { id: 5, title: 'Research', count: 4, anchor: 'researches' },
    { id: 6, title: 'Collections', count: 4, anchor: 'collections' }
  ];

  const goodsData = [
    {
      id: 1,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '1',
      price: '$39.90'
    },
    {
      id: 2,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '2',
      price: '$39.90'
    },
    {
      id: 3,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '3',
      price: '$39.90'
    },
    {
      id: 4,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '3',
      price: '$39.90'
    },
    {
      id: 5,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '3',
      price: '$39.90'
    },
    {
      id: 6,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '3',
      price: '$39.90'
    },
    {
      id: 7,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '3',
      price: '$39.90'
    }
  ];

  const books = [
    {
      id: 8,
      name: ' "Twilight of the Money Gods" ',
      img: '4',
      price: '$29.90',
      author: 'John Rapley'
    },
    {
      id: 9,
      name: '"Twilight of the Money Gods"',
      img: '4',
      price: '$29.90',
      author: 'John Rapley'
    },
    {
      id: 10,
      name: '"Twilight of the Money Gods"',
      img: '4',
      price: '$29.90',
      author: 'John Rapley'
    },
    {
      id: 11,
      name: '"Twilight of the Money Gods"',
      img: '4',
      price: '$29.90',
      author: 'John Rapley'
    },
    {
      id: 12,
      name: '"Twilight of the Money Gods"',
      img: '4',
      price: '$29.90',
      author: 'John Rapley'
    }
  ];

  return { goodsData, maketplaceFiltersData, books };
};

export { useMarketplaceData };

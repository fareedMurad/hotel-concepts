const useMarketplaceData = () => {
  const maketplaceFiltersData = [
    { id: 1, title: 'Web templates', count: 256 },
    { id: 2, title: 'Books', count: 12 },
    { id: 3, title: 'Tools', count: 24 },
    { id: 4, title: 'Casse studies', count: 4 },
    { id: 5, title: 'Research', count: 4 },
    { id: 5, title: 'Collections', count: 4 }
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
    }
  ];

  const books = [
    {
      id: 4,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '4',
      price: '$39.90',
      author: 'John Rapley'
    },
    {
      id: 5,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '4',
      price: '$39.90',
      author: 'John Rapley'
    },
    {
      id: 6,
      name: 'What Stellar Hospitality Means in 2019 ',
      img: '4',
      price: '$39.90',
      author: 'John Rapley'
    }
  ];

  return { goodsData, maketplaceFiltersData, books };
};

export { useMarketplaceData };

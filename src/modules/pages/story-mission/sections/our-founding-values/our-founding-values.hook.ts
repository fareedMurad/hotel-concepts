const useOurFoundingValuesData = () => {
  const data = [
    {
      id: 1,
      title: 'Diversity as a source of learning and enrichment',
      picture: 'sm-card-1',
      description:
        'We are free from any dominant culture or prevalent dogma; we are open to, and respectful of, other views; we learn through the exchange of ideas and experiences.'
    },
    {
      id: 2,
      title: 'Closeness to the international business community ',
      picture: 'sm-card-2',
      description:
        'We partner with the international business community to explore management knowledge; we believe in the role of business as a force for improving people’s lives.'
    },
    {
      id: 3,
      title: 'Entrepreneurial spirit ',
      picture: 'sm-card-3',
      description:
        'We are willing to experiment and innovate; we are ready to take risks and manage the results of our actions.'
    }
  ];

  return { data };
};

export { useOurFoundingValuesData };

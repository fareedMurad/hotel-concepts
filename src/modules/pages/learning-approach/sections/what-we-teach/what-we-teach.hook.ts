import { useQuery, gql } from '@apollo/client';

const useWhatWeTeachData = language => {
  const GET_FILTERS_CATEGORIES = gql`
    query($locale: String!) {
      courseCategoryCollection(limit: 6, locale: $locale) {
        items {
          sys {
            id
          }
          name
          description
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_FILTERS_CATEGORIES, {
    variables: { locale: language }
  });

  // order data

  const order = {
    '2FLQCegBLgDC7z3wAFrc2h': 1,
    '6E8ZAgk3jj7sTFGw9BJKg1': 2,
    '2hUEjZIwo6GBHOt1SzkrTT': 3,
    '2VgQmXi2Dre5mqEihTFEPU': 4,
    '2vd7HdUXSIHEOoRvTyY6kp': 5
  };

  let cards = [];
  if (data) {
    for (const property in order) {
      const item = data?.courseCategoryCollection?.items.filter(
        el => el.sys.id === property
      );

      cards.push(item[0]);
    }
  }

  return {
    cards,
    loading
  };
};

export { useWhatWeTeachData };

import { useQuery, gql } from '@apollo/client';

const useHomePageData = language => {
  const GET_TESTEMONIALS = gql`
    query($locale: String!) {
      homePagetestimonials(id: "4ZHZc4KfxTj1X5xEDgP9jl", locale: $locale) {
        testimonialCollection {
          items {
            name
            text
            companyName
            photo {
              url(transform: { format: JPG_PROGRESSIVE, quality: 50 })
            }
          }
        }
      }
    }
  `;

  const { data, loading: homepageTestimonialsLoading, error } = useQuery(
    GET_TESTEMONIALS,
    {
      variables: { locale: language }
    }
  );

  return {
    homePageTestimonials:
      data?.homePagetestimonials?.testimonialCollection?.items,
    homepageTestimonialsLoading
  };
};

export { useHomePageData };

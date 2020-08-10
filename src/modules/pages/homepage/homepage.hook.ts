import { useQuery, gql } from '@apollo/client';

const useHomePageData = () => {
  const GET_TESTEMONIALS = gql`
    {
      homePagetestimonials(id: "4ZHZc4KfxTj1X5xEDgP9jl") {
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
    GET_TESTEMONIALS
  );

  return {
    homePageTestimonials:
      data?.homePagetestimonials?.testimonialCollection?.items,
    homepageTestimonialsLoading
  };
};

export { useHomePageData };

import { useQuery, gql } from '@apollo/client';

const useHotelConceptData = language => {
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

  const { data, loading: hotelconceptsTestimonialsLoading, error } = useQuery(
    GET_TESTEMONIALS,
    {
      variables: { locale: language }
    }
  );

  return {
    hotelconceptsTestimonials:
      data?.hotelconceptstestimonials?.testimonialCollection?.items,
    hotelconceptsTestimonialsLoading
  };
};

export { useHotelConceptData };

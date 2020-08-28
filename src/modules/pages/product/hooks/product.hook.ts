import { gql, useQuery } from '@apollo/client';

const useProductData = () => {
  // const GET_PRODUCT_DATA = gql`
  //   query($id: String!) {
  //     product(id: $id, locale: "en-US") {
  //   name
  //   details
  //   bookCategory
  //   productImagesCollection {
  //     items {
  //       url
  //     }
  //   }
  //   languages
  //   price
  //   author
  //   publishDate
  //   previewPagesCollection {
  //     items {
  //       sys {
  //         id
  //       }
  //       url
  //       contentType
  //     }
  //   }
  // }
  //   }
  // `;

  // const { data, loading, error } = useQuery(GET_PRODUCT_DATA, {
  //   variables: { id: productId }
  // });

  // return { product: data?.product, productLoading: loading };
  const product = {
    name: 'Architecture Competitions',
    details:
      'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took book Lorem Ipsum has been the Lorem .',
    authors: [
      {
        name: 'Dorothy Graham',
        position: 'Hilton, Project Manager',
        picture:
          'https://images.ctfassets.net/qgx3dmmccd7u/3ebRS5PO18BbJZgZ0JLxs6/7316a3db3ca0181ce5c2130107b33dbe/author.png',
        description:
          'Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy. In this program, you will gain general knowledge about the principles of digital marketing and acquire the skills, analytical techniques and approaches to apply digitalst rategies effectively for customer acquisition, engagement and retention.',
        key: 125232
      },
      {
        name: 'Dorothy Graham',
        position: 'Hilton, Project Manager',
        picture:
          'https://images.ctfassets.net/qgx3dmmccd7u/3ebRS5PO18BbJZgZ0JLxs6/7316a3db3ca0181ce5c2130107b33dbe/author.png',
        description:
          'Digital marketing has emerged as the pillar of many businesses’ promotion and branding strategy. In this program, you will gain general knowledge about the principles of digital marketing and acquire the skills, analytical techniques and approaches to apply digitalst rategies effectively for customer acquisition, engagement and retention.',
        key: 12345345
      }
    ],
    bookCategory: 'bussiness',
    productImage: 'https://images.app.goo.gl/Cn2K1BTyd89krFHs7',
    languages: ['Eglish'],
    price: '100',
    publishDate: '2020-07-26T21:00:00.000Z',
    description: '<p>hello</p>',
    skills: [
      'Digital marketing',
      'Digital marketing',
      'Digital marketing',
      'Digital marketing'
    ],
    productMaterials: [
      'Marketing analysis of the market. Review of best practices',
      'How to calculate brand equity',
      'Market and consumer analysis. Examples ',
      'Positioning checklist ',
      '5 examples of good and bad positioning'
    ]
  };
  return { product };
};

export { useProductData };

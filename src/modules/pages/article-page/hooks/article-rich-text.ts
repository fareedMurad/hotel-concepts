import { gql, useQuery } from '@apollo/client';

const useArticleRichTextData = (articleId: string) => {
  const GET_FIRST_RICH_TEXT = gql`
    query($id: String!) {
      article(id: $id) {
        backgroundImageQuote {
          quoteText
          author
          backgroundImg {
            url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
          }
        }
        richTextSection1 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
              }
            }
          }
        }
        richTextSection2 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
              }
            }
          }
        }
        richTextSection3 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
              }
            }
          }
        }
        richTextSection4 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
              }
            }
          }
        }
        imagesForSliderCollection {
          items {
            url(transform: { format: JPG_PROGRESSIVE, quality: 70 })
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_FIRST_RICH_TEXT, {
    variables: { id: articleId }
  });

  return {
    firstRichTextData: data?.article?.richTextSection1,
    secondRichTextData: data?.article?.richTextSection2,
    thirdRichTextData: data?.article?.richTextSection3,
    fourthRichTextData: data?.article?.richTextSection4,
    backgroundImageQuoteData: data?.article?.backgroundImageQuote,
    imagesForSliderData: data?.article?.imagesForSliderCollection?.items,
    articleRichTextLoading: loading
  };
};

export { useArticleRichTextData };

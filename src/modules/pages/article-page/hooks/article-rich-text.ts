import { gql, useQuery } from '@apollo/client';

const useArticleRichTextData = (articleId: string, language: string) => {
  const GET_FIRST_RICH_TEXT = gql`
    query($id: String!, $locale: String!) {
      article(id: $id, locale: $locale) {
        backgroundImageQuote {
          quoteText
          author
          backgroundImg {
            url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
          }
        }
        richTextSection1 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
              }
            }
          }
        }
        richTextSection2 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
              }
            }
          }
        }
        richTextSection3 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
              }
            }
          }
        }
        richTextSection4 {
          json
          links {
            assets {
              block {
                url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
              }
            }
          }
        }
        imagesForSliderCollection {
          items {
            url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_FIRST_RICH_TEXT, {
    variables: { id: articleId, locale: language }
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

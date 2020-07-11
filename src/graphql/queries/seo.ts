export const QUERY_SEO = /* GraphQL */ `
  query Seo {
    seo {
      title
      description
      favicon {
        url
      }
      ogImage {
        url
      }
    }
  }
`

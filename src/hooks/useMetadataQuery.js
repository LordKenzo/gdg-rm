import { useStaticQuery, graphql } from 'gatsby'

export const useMetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data.site.siteMetadata
}

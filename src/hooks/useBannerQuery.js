import { useStaticQuery, graphql } from 'gatsby'

export const useBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query BannerConfig {
      allFile(filter: { name: { eq: "banner" }, extension: { eq: "json" } }) {
        nodes {
          childConfigJson {
            banner {
              title
              description
              tag
              button1 {
                text
                link
              }
              button2 {
                text
                link
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.nodes[0].childConfigJson.banner
}

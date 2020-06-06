import { useStaticQuery, graphql } from 'gatsby'

export const useAboutUsQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutUsConfig {
      allFile(filter: { name: { eq: "about" }, extension: { eq: "json" } }) {
        nodes {
          childConfigJson {
            about {
              title
              description
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
  return data.allFile.nodes[0].childConfigJson.about
}

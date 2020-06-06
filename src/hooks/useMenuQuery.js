import { useStaticQuery, graphql } from 'gatsby'

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuConfig {
      allFile(filter: { name: { eq: "menu" } }) {
        nodes {
          childConfigJson {
            menu {
              id
              name
              link
            }
          }
        }
      }
    }
  `)
  return data.allFile.nodes[0].childConfigJson.menu
}

import { graphql, useStaticQuery } from 'gatsby'

const useEvents = () => {
  const data = useStaticQuery(graphql`
    query AllEventsQuery {
      allFile(
        filter: {
          absolutePath: { glob: "**/events/**/*" }
          ext: { eq: ".mdx" }
        }
        sort: { fields: childMdx___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                date
                slug
                featureImage {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              excerpt
              id
            }
          }
        }
      }
    }
  `)

  return data.allFile.edges.map(event => ({
    id: event.node.childMdx.id,
    title: event.node.childMdx.frontmatter.title,
    slug: event.node.childMdx.frontmatter.slug,
    featureImage: event.node.childMdx.frontmatter.featureImage,
    date: event.node.childMdx.frontmatter.date,
    excerpt: event.node.childMdx.excerpt,
  }))
}

export default useEvents

import React from 'react'
import { graphql } from 'gatsby'
import Pagination from '../components/pagination'

const allEvents = ({ pageContext, data }) => {
  const { allEvents, currentPage, numPages } = pageContext
  const events = data.allFile.edges
  console.log('allEvents', allEvents)
  return (
    <>
      <h1>All events !!</h1>
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        events={events}
        allEvents={allEvents}
      />
    </>
  )
}

export default allEvents

export const pageQuery = graphql`
  query AllEventsPageQuery($skip: Int!, $limit: Int!) {
    allFile(
      filter: { absolutePath: { glob: "**/events/**/*" }, ext: { eq: ".mdx" } }
      skip: $skip
      sort: { fields: childMdx___frontmatter___date, order: DESC }
      limit: $limit
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              slug
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  }
`

/*
export const pageQuery = graphql`
  query AllEventsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
          }
        }
      }
    }
  }
`
*/

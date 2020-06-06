import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import FeatureImage from '../components/shared/featureImage'

const singleEvent = ({ data }) => {
  const event = data.mdx
  const featureImage = event.frontmatter.featureImage
    ? event.frontmatter.featureImage.childImageSharp.fixed
    : ''

  return (
    <div>
      <div>
        <h1>{event.frontmatter.title}</h1>
        <FeatureImage fixed={featureImage} />
        <MDXRenderer>{event.body}</MDXRenderer>
      </div>
    </div>
  )
}

export default singleEvent

// Questa è la query rispetto al singolo Evento dato dall'ID
export const pageQuery = graphql`
  query SingleEventQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      excerpt
    }
  }
`

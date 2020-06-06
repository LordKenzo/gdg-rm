import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "default-event.png" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <div>
      <Img fixed={fixed ? fixed : data.imageSharp.fixed} />
    </div>
  )
}

export default FeatureImage

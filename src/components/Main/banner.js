import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useBannerQuery } from '../../hooks/useBannerQuery'

const Image = () => {
  const data = useStaticQuery(graphql`
    query ImageBanner {
      placeholderImage: file(relativePath: { eq: "future.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Banner = () => {
  const banner = useBannerQuery()
  return (
    <section className="banner">
      <div className="image">
        <Image />
      </div>
      <div className="text">
        <h3 dangerouslySetInnerHTML={{ __html: banner.title }}></h3>
        <p>{banner.tag}</p>
        <span className="description">{banner.description}</span>
        <p>{banner.tag}</p>

        <button className="button primary">{banner.button1.text}</button>
        <button className="button secondary">{banner.button2.text}</button>
      </div>
    </section>
  )
}

export default Banner

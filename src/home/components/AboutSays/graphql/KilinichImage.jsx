import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const KilinichImage = ({ title, alt, className }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "about-says/kilinich.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Img
        fluid={desktop.childImageSharp.fluid}
        title={title}
        alt={alt}
        className={className}
      />
    </>
  )
}

export default KilinichImage

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const BoxingGlovesImageShorts = ({ title, className, alt }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "shop/muay_thai_shorts_item.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 600) {
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

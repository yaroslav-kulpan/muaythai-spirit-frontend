import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const BoxingGlovesImageMindy = ({ title, className, alt }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(
          relativePath: { eq: "shop/boxing_gloves_mindy_item.jpg" }
        ) {
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
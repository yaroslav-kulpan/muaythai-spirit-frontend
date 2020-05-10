import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const SupportImage = ({ title, className, alt, style }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "shop/support_item.jpg" }) {
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
        style={style}
        alt={alt}
        className={className}
      />
    </>
  )
}

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const SlavaImg = ({ title, className, alt }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "team/pro-muaythai.jpg" }) {
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

export default SlavaImg

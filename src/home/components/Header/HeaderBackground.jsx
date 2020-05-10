import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const HeaderBackground = ({ children, tag, id, className }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header-image.png" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const backgroundFluidImageStack = [
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    desktop.childImageSharp.fluid,
  ]

  return (
    <>
      <BackgroundImage
        Tag={tag}
        id={id}
        className={className}
        style={{
          backgroundAttachment: 'fixed',
        }}
        fluid={backgroundFluidImageStack}
        title="Muay Thai Spirit Gym"
        role="img"
        aria-label="Muay Thai Spirit Gym"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </>
  )
}

export default HeaderBackground

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { FC } from 'react'

const Image: FC<{ alt?: string; filename?: string }> = ({
  filename = `gatsby-astronaut.png`,
  alt,
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }

      return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default Image

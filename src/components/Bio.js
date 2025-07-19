import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              width: '100%'
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p> 
              Hi, I'm <strong>{author}</strong> - a Programmer who loves to Read, Evaluate and Loop. You can find me on
              {` `}
              <a href="https://github.com/vinkrish" target="_blank">
                GitHub
              </a>
              {` `}
              <a href="https://www.linkedin.com/in/vinay-krishna-07a1281a/" target="_blank">
                LinkedIn
              </a>
              {` `}
              <a href={`https://twitter.com/${social.twitter}`} target="_blank">
                Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/vinkrish.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

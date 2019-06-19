import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

export default function ProfileImage() {
  return (
    <StaticQuery
      query={graphql`
        query ProfileImageQuery {
          avatar: file(absolutePath: { regex: "/skovhus.jpg/" }) {
            childImageSharp {
              fixed(width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={'Kenneth Skovhus'}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 60,
              borderRadius: '100%',
            }}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
        )
      }}
    />
  )
}
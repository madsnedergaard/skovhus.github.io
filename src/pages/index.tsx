import React from 'react'
import { Link, graphql } from 'gatsby'

import Discography from '../components/Discography'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { rhythm } from '../utils/typography'
import { TALKS } from '../content/talks'

const Heading = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h1
    style={{
      fontSize: '2rem',
    }}
    id={id}
  >
    {children}
  </h1>
)

const LinkEntity = ({
  description,
  linkTo,
  subTitle,
  title,
}: {
  subTitle: string
  description: string
  linkTo: string
  title: string
}) => {
  const linkElement = linkTo.startsWith('http') ? (
    <ExternalLink linkTo={linkTo} underline={false}>
      {title}
    </ExternalLink>
  ) : (
    <Link style={{ boxShadow: `none` }} to={linkTo}>
      {title}
    </Link>
  )

  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        {linkElement}
      </h3>
      <small>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

type Props = {
  data: any
  location: Location
}

export default function Index({ data, location }: Props) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO />
      <Heading>
        Hi, I&apos;m Kenneth Skovhus. I&apos;ve been messing around with computers for as
        long as I can remember. MSc in Computer Science. Enjoys life in beautiful
        Copenhagen.
      </Heading>
      <Heading id="posts">I occasionally blog</Heading>
      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <LinkEntity
            description={node.frontmatter.description || node.excerpt}
            key={node.fields.slug}
            linkTo={node.fields.slug}
            subTitle={`${node.frontmatter.date} • ${node.timeToRead} minutes read`}
            title={title}
          />
        )
      })}

      <Heading id="talks">I enjoy giving talks</Heading>
      {TALKS.map(talk => (
        <LinkEntity {...talk} key={talk.title} />
      ))}

      <Heading id="oss">I contribute to open source</Heading>
      <p>
        I&apos;m a strong advocate for giving back to the open source software community,
        that I depend on to do my job and projects.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>
          <ExternalLink linkTo="https://github.com/skovhus/jest-codemods">
            skovhus/jest-codemods
          </ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/skovhus/css-modules-flow-types">
            skovhus/css-modules-flow-types
          </ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://hatch.sh/">hatch.sh</ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/mads-hartmann/bash-language-server">
            bash-language-server
          </ExternalLink>
          {` `}+ bash extensions for code editors
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/facebook/jest">jest</ExternalLink>
        </li>
      </ul>

      <Heading id="music">I play &amp; record music</Heading>
      <Discography />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

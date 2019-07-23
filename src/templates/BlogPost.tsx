import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogBio from '../components/BlogBio'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { rhythm, scale } from '../utils/typography'

import './BlogPost.css'

type Props = {
  data: any
  location: Location
  pageContext: any
}

export default function BlogPostTemplate({ data, location, pageContext }: Props) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const { siteUrl } = data.site.siteMetadata
  const featuredImageSrc = `${siteUrl}${post.frontmatter.featuredImage.childImageSharp.fixed.src}`

  return (
    <Layout location={location}>
      <SEO
        description={post.frontmatter.description || post.excerpt}
        image={featuredImageSrc}
        pageTitle={post.frontmatter.title}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <BlogBio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fixed(width: 500, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
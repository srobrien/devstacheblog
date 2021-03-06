import React from 'react'
import { graphql } from 'gatsby'
import BlogCard from '../components/Post/BlogCard'
import Layout from '../components/index.js'
import styled from 'styled-components'
import SocialMediaBar from '../components/Social/SocialMediaBar'
import Link from 'gatsby-link'

const HomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 30px;

  @media (max-width: 1024px) {
    margin-left: 50px;
  }
  @media (max-width: 620px) {
    margin-left: 0;
  }
`

const ResponseHeader = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1,
  h3 {
    margin: 0;
    padding: 2px;
  }

  h1 {
    margin-bottom: 3px;
    background-color: #000;
    color: #fff;
  }

  h3 {
    color: #fff;
    margin-bottom: 9px;
    background-image: linear-gradient(to right, #e583e2, #e583e2 50%, #000 50%);
    background-size: 220% 100%;
    background-position: 100%;
  }

  .back {
    :hover {
      transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
      background-position: 0%;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const totalCount = data.allContentfulBlogPost.edges.length
  const { tag } = pageContext
  const { edges } = data.allContentfulBlogPost
  const tagHeader = `${totalCount} POST${
    totalCount === 1 ? '' : 'S'
  } TAGGED WITH `

  return (
    <Layout>
      <SocialMediaBar />
      <ResponseHeader>
        <h3>
          {tagHeader}
          <span style={{ color: '#e583e2' }}>{tag.toUpperCase()}</span>
        </h3>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h3 className="back">> BACK TO ALL POSTS</h3>
        </Link>
      </ResponseHeader>

      <HomePage>
        {edges.map(({ node }) => {
          return <BlogCard key={node.id} post={node} />
        })}
      </HomePage>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlogPost(
      sort: { order: DESC, fields: [createdAt] }
      limit: 2000
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          title
          date(formatString: "DD MMMM YYYY")
          body {
            id
            childMarkdownRemark {
              id
              excerpt(pruneLength: 200)
            }
          }
          slug
          tags
          thumbnail {
            resolutions {
              src
            }
          }

          images {
            id
            resize(width: 400) {
              src
            }
          }
        }
      }
    }
  }
`

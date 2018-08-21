import React from "react";
import Link from "gatsby-link";
import PostListing from "../components/Post/PostListing";

const IndexPage = ({ data }) => (
  <div>
    <h1>Blog Site</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
          excerpt(pruneLength: 280)
          fields {
            slug
          }
        }
      }
    }
  }
`;

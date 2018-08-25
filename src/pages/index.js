import React from "react";
import BlogCard from "../components/Post/BlogCard";
import styled from "styled-components";

const IndexPage = ({ data }) => (
  <div className="grid-container">
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return (
        <BlogCard
          key={node.id}
          post={node}
          type={node.frontmatter.type}
        />
      );
    })}
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
            type
            tags
          }
          html
          excerpt(pruneLength: 150)
          fields {
            slug
          }
        }
      }
    }
  }
`;

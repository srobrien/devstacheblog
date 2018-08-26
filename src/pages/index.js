import React from "react";
import BlogCard from "../components/Post/BlogCard";
import styled from "styled-components";

const HomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 30px;
`;

const IndexPage = ({ data }) => (
  <HomePage>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return (
        <BlogCard key={node.id} post={node} type={node.frontmatter.type} />
      );
    })}
  </HomePage>
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
          excerpt(pruneLength: 350)
          fields {
            slug
          }
        }
      }
    }
  }
`;

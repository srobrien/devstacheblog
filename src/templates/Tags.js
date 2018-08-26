import React from "react";
import PropTypes from "prop-types";
import BlogCard from "../components/Post/BlogCard";
import styled from "styled-components";
import Link from "gatsby-link";

const HomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 30px;
`;

const ResponseHeader = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1,
  h3 {
    background-color: #000;
    color: pink;
    margin: 0;
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
`;

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} POST${
    totalCount === 1 ? "" : "S"
  } TAGGED WITH ${tag.toUpperCase()}`;

  return (
    <div>
      <ResponseHeader>
        <h1>{tagHeader}</h1>
        <h3>> BACK TO ALL POSTS</h3>
      </ResponseHeader>

      <HomePage>
        {edges.map(({ node }) => {
          return (
            <BlogCard key={node.id} post={node} type={node.frontmatter.type} />
          );
        })}
      </HomePage>
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            type
            tags
          }
          html
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`;

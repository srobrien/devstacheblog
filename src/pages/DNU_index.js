import React, { Fragment } from "react";
import BlogCard from "../components/Post/BlogCard";
import styled from "styled-components";
import Tags from "../components/Tags/Tags";

const HomePage = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 30px;
`;

const TagContainer = styled.section`
  margin-bottom: 20px;
  background-color: rgb(64.9%, 6.2%, 79.6%);
  padding: 10px;
`;

const PageContainer = styled.div`
  display: flex;
`;

const MainPage = styled.div`
  flex: 0 1 auto;
`;

const Sidebar = styled.div`
  flex: 1 1 auto;
  position: relative;
  max-width: 300px;

  margin-right: 20px;
`;

const Test = styled.div`
  position: absolute;
  left: 0;
`;

const tags = [];

const IndexPage = ({ data }) => (
  <Fragment>
    <PageContainer>
      <Sidebar>
        <Test />
        <h3>REFINE POSTS</h3>
        <Tags tags={tags} />
        <Test />
      </Sidebar>

      <MainPage>
        <HomePage>
          {data.allContentfulBlogPost.edges.map(({ node }) => {
            node.tags.map(tag => {
              if (!tags.includes(tag)) {
                tags.push(tag);
              }
            });

            return <BlogCard key={node.body.id} post={node} />;
          })}
        </HomePage>
      </MainPage>
    </PageContainer>
  </Fragment>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { order: DESC, fields: [createdAt] }
      limit: 2000
    ) {
      edges {
        node {
          title
          createdAt(formatString: "D MMMM YYYY")
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
`;

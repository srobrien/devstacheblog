import React, { Component, Fragment } from "react";
import styled from "styled-components";
import BlogCard from "../components/Post/BlogCard";
import Tags from "../components/Tags/Tags";
import Link from "gatsby-link";

//Style components

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

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;

  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
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
            {group.map(({ node }) => {
              node.tags.map(tag => {
                if (!tags.includes(tag)) {
                  tags.push(tag);
                }
              });

              return <BlogCard key={node.body.id} post={node} />;
            })}
          </HomePage>
          <div className="previousLink">
            <NavLink
              test={first}
              url={previousUrl}
              text="Go to Previous Page"
            />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={nextUrl} text="Go to Next Page" />
          </div>
        </MainPage>
      </PageContainer>
    </Fragment>
  );
};
export default IndexPage;

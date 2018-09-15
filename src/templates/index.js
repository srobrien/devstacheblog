import React, { Component } from "react";
import styled from "styled-components";
import BlogCard from "../components/Post/BlogCard";
import Tags from "../components/Tags/Tags";
import Link from "gatsby-link";

const PageContainer = styled.div`
  position: relative;
`;

const MainPage = styled.div`
  /* flex: 0 1 auto; */
`;

const Sidebar = styled.div`
  margin-bottom: 30px;
`;

const TagBar = styled.nav`
  margin-bottom: 30px;
  display: block;
  text-align: right;
  margin-right: 4.5%;
`;

const HomePage = styled.section`
  top: 100px;
  padding-right: 5%;
  padding-left: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 30px;
`;

const PageNavigation = styled.div`
  font-size: 1.5rem;
  text-align: center;
  span {
    margin-left: 10px;
    margin-right: 10px;
    background: black;
    color: grey;
    padding: 3px;
    :hover {
      cursor: not-allowed;
    }
  }
  a {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    background-image: linear-gradient(to right, #e583e2, #e583e2 50%, #000 50%);
    background-size: 220% 100%;
    background-position: 98%;
    padding: 3px;
    text-decoration: none;
    :hover {
      transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
      background-position: 0%;
      cursor: pointer;
    }
  }
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
  const { tags } = pathContext.additionalContext;
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <PageContainer>
      <TagBar>
        <h3>REFINE POSTS BY CATEGORY</h3>
        <Tags tags={tags} />
      </TagBar>

      <MainPage>
        <HomePage>
          {group.map(({ node }) => {
            return <BlogCard key={node.body.id} post={node} />;
          })}
        </HomePage>

        <PageNavigation>
          <NavLink test={first} url={previousUrl} text="<<" />
          <NavLink test={last} url={nextUrl} text=">>" />
        </PageNavigation>
      </MainPage>
    </PageContainer>
  );
};
export default IndexPage;

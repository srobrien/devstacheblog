import React, { Component } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/index.js";
import Link from "gatsby-link";
import styled from "styled-components";
import Prism from "prismjs";
import "../components/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import Tags from "../components/Tags/Tags";
import DateTime from "../components/Util/Date";
import SocialMediaBar from "../components/Social/SocialMediaBar";

const MainPost = styled.div`
  p {
    line-height: 2rem;
    text-align: justify;
  }

  h3 {
    margin-top: 30px;
  }
  .gatsby-resp-image-link {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    color: #666;
    &:hover {
      color: #e583e2;
    }
  }
`;

const Header = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23bfbcc0' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  padding: 10px;
  color: #fff;
  h1 {
    margin-bottom: 10px;
    background: #000;
    display: inline-block;
    padding: 3px;
  }
`;

const ResponseHeader = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    margin: 0;
    padding: 2px;
    color: #fff;
    margin-bottom: 9px;
    background-image: linear-gradient(to right, #e583e2, #e583e2 50%, #000 50%);
    background-size: 220% 100%;
    background-position: 100%;
    :hover {
      transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
      background-position: 0%;
      cursor: pointer;
    }
  }
`;

export default class PostPage extends Component {
  componentDidMount = () => {
    const codeBlocks = document.querySelectorAll("code");
    codeBlocks.forEach(code => {
      code.classList.add("language-javascript");
    });

    const preBlocks = document.querySelectorAll("pre");
    preBlocks.forEach(pre => {
      pre.classList.add("line-numbers");
    });

    Prism.highlightAll();
  };

  render() {
    const postData = this.props.data.contentfulBlogPost;

    return (
      <Layout>
        <Helmet>
          <title>{postData.title}</title>
        </Helmet>

        <ResponseHeader>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h3>> BACK TO ALL POSTS</h3>
          </Link>
        </ResponseHeader>
        <Header>
          <SocialMediaBar />
          <h1>{postData.title}</h1>

          <DateTime date={postData.date} width="220px" />
          <br />
          <Tags tags={postData.tags} />
        </Header>
        <div />
        <h4
          style={{
            textAlign: "right",
            color: "#000",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          Last Edited: {postData.updatedAt}
        </h4>
        <MainPost
          dangerouslySetInnerHTML={{
            __html: postData.body.childMarkdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query($post: String!) {
    contentfulBlogPost(slug: { eq: $post }) {
      title
      date(formatString: "DD MMMM YYYY")
      updatedAt(formatString: "DD MMMM YYYY")
      tags
      images {
        resolutions {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

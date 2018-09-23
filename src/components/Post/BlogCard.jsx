import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Tags from "../../components/Tags/Tags";
import DateTime from "../Util/Date";

export default class BlogCardBasic extends Component {
  render() {
    const { title, date, tags } = this.props.post;
    const { excerpt } = this.props.post.body.childMarkdownRemark;
    const thumbnail = this.props.post.thumbnail.resolutions.src;
    const { slug } = this.props.post;
    const url = `/post/${slug}`;

    return (
      <CardContainer>
        <Header thumbnail={thumbnail}>
          <PostMeta>
            <Link to={url}>
              <h3>{title}</h3>
              <DateTime date={date} width="75%" />
            </Link>
          </PostMeta>
        </Header>

        <div className="description">
          <Tags tags={tags} />

          <p>{excerpt}</p>
          <div className="link">
            <Link to={url}>[Read More...]</Link>
          </div>
        </div>
      </CardContainer>
    );
  }
}

const CardContainer = styled.article`
  border-radius: 0px;
  box-shadow: 0 3px 7px -1px;
  display: block;
  margin-bottom: 40px;
  transition: 0.5s ease;
  background-color: ghostwhite;
  &:hover {
    transition: 0.5s ease;
    cursor: pointer;
  }
  .description {
    padding: 10px;
    z-index: 2;
    .link {
      text-align: right;
      margin-right: 20px;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

const Header = styled.div`
  position: relative;
  height: 300px;
  background: url(${props => props.thumbnail});
  background-size: cover;
  background-position: center center;
  background-repeat: none;
  padding-right: 10px;
`;

const PostMeta = styled.div`
  position: absolute;

  left: 0;
  bottom: 0px;
  width: 90%;
  a {
    text-decoration-line: none;
    color: #000;
    h3 {
      font-size: 2rem;
      color: #fff;
      background-color: #000;
      padding-right: 5px;
      padding-left: 5px;
      margin: 0;
    }
  }
`;

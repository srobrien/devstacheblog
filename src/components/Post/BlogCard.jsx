import React, { Component } from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
import Tags from "../../components/Tags/Tags";
import monday from "../../images/icons/days/1.svg";
import tuesday from "../../images/icons/days/2.svg";
import wednesday from "../../images/icons/days/3.svg";
import thursday from "../../images/icons/days/4.svg";
import friday from "../../images/icons/days/5.svg";
import saturday from "../../images/icons/days/6.svg";
import sunday from "../../images/icons/days/7.svg";
import calenderIcon from "../../images/icons/days/default.svg";

export default class BlogCardBasic extends Component {
  render() {
    const { title, createdAt, tags } = this.props.post;
    const { excerpt } = this.props.post.body.childMarkdownRemark;
    const thumbnail = this.props.post.thumbnail.resolutions.src;
    const { slug } = this.props.post;
    const url = `/post/${slug}`;
    const day = new Date(createdAt).getDay();

    let calender = calenderIcon;
    switch (day) {
      case 1:
        calender = monday;
        break;

      case 2:
        calender = tuesday;
        break;

      case 3:
        calender = wednesday;
        break;

      case 4:
        calender = thursday;
        break;

      case 5:
        calender = friday;
        break;

      case 6:
        calender = saturday;
        break;

      case 0:
        calender = sunday;
        break;

      default:
        break;
    }

    return (
      <CardContainer>
        <Header>
          <img src={thumbnail} />

          <Overlay>
            <Link to={url}>
              <h3>{title}</h3>
            </Link>
            <DateWrapper>
              <div className="calender">
                <img src={calender} alt="day" />
              </div>
              <div className="date">
                <h4>{createdAt}</h4>
              </div>
            </DateWrapper>
          </Overlay>
        </Header>

        <div className="description">
          <Tags tags={tags} />

          <p>{excerpt}</p>
          <div className="link">
            <Link to={url}>[...]</Link>
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
    }
  }
`;

const DateWrapper = styled.div`
  background-color: white;
  border: 2px solid red;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 5px;
  .date {
    max-width: 50%;
    h4 {
      margin: 0;
      margin-left: 5px;
      font-size: 1.1rem;
    }
  }
  img {
    width: 70%;
  }
`;

const Header = styled.div`
  position: relative;
  img {
    max-width: 100%;
    width: 100%;
    max-height: 300px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 20px;
  a {
    text-decoration-line: none;
    color: #000;
    h3 {
      font-size: 2rem;
      color: #e583e2;
      background-color: #000;
      margin-right: 5%;
      padding-left: 5px;
    }
  }
`;

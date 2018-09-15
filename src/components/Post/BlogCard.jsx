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
    const { title, date, tags } = this.props.post;
    const { excerpt } = this.props.post.body.childMarkdownRemark;
    const thumbnail = this.props.post.thumbnail.resolutions.src;
    const { slug } = this.props.post;
    const url = `/post/${slug}`;
    const day = new Date(date).getDay();

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
        <Header thumbnail={thumbnail}>
          <PostMeta>
            <Link to={url}>
              <h3>{title}</h3>
              <DateWrapper>
                <img src={calender} alt="day" />
                <h4>{date}</h4>
              </DateWrapper>
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

const DateWrapper = styled.div`
	width: 70%;
  padding-top: 3px;
  white-space: nowrap;
 	background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  img {
    padding: 3px;
  }
	h4 {
			margin:0;
      margin-left: 10px;
      font-size: 1.2rem;
     
    }
  }
`;

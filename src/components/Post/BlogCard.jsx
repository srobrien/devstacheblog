import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import stache from "../../images/icons/stache.svg";
import react from "../../images/icons/react.svg";
import css from "../../images/icons/css.svg";
import gatsby from "../../images/icons/gatsby.svg";
import monday from "../../images/icons/days/1.svg";
import tuesday from "../../images/icons/days/2.svg";
import wednesday from "../../images/icons/days/3.svg";
import thursday from "../../images/icons/days/4.svg";
import friday from "../../images/icons/days/5.svg";
import saturday from "../../images/icons/days/6.svg";
import sunday from "../../images/icons/days/7.svg";
import calenderIcon from "../../images/icons/days/default.svg";

const Pill = styled.span`
  background-color: #ffc107;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  margin-top: 5px;
  margin-right: 5px;
`;

const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 7px -1px;
  display: flex;
  
  margin-bottom: 40px;
  transition: 0.5s ease;
  background-color: ghostwhite;
	.background {
		background-image: url("${props => props.logo}");
		background-size: cover;
		background-position-x: center;
	
	}
	
  &:hover {
    transition: 0.5s ease;
    cursor: pointer;
    
    
		
	
  }

  .description {
    padding: 10px;
    z-index: 2;
    a {
      text-decoration-line: none;
      color: #000;
      h3 {
        font-size: 1.5rem;
      }
    }
    .link {
      text-align: right;
      margin-right: 20px;
    }
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .date {
    max-width: 50%;
    h4 {
      margin: 0;
      font-size: 1.1rem;
    }
  }
  img {
    width: 70%;
  }
`;

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default class BlogCardBasic extends Component {
  render() {
    const { type } = this.props;
    let logo = stache;

    switch (type) {
      case "react":
        logo = react;
        break;

      case "css":
        logo = css;
        break;

      case "gatsby":
        logo = gatsby;
        break;

      case "default":
        logo = stache;
        break;

      default:
        logo = stache;
    }

    const { title, date, tags } = this.props.post.frontmatter;
    const { excerpt } = this.props.post;
    const { alt } = this.props;
    const { slug } = this.props.post.fields;
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

      case 7:
        calender = sunday;
        break;

      default:
        break;
    }

    return (
      <CardContainer alt={alt} logo={logo}>
        <div className="description">
          <div className="background">
            <Link to={slug}>
              <h3>{title}</h3>
            </Link>

            <DateWrapper>
              <div className="calender">
                <img src={calender} alt="day" />
              </div>
              <div className="date">
                <h4>{date}</h4>
              </div>
            </DateWrapper>
            <div>
              {tags.map(tag => (
                <Pill style={{ backgroundColor: getRandomColor() }} key={tag}>
                  {tag}
                </Pill>
              ))}
            </div>

            <p>{excerpt}</p>
            <div className="link">
              <Link to={slug}>[...]</Link>
            </div>
          </div>
        </div>
      </CardContainer>
    );
  }
}

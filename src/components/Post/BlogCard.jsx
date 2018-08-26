import React, { Component } from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
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
import blogPic from "../../images/blogheader.jpg";

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
      <CardContainer logo={logo}>
        <Header>
          <img src={blogPic} />
          <Overlay>
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
          </Overlay>
        </Header>

        <div className="description">
          <div>
            {tags.map(tag => {
              let theme = themes[tag];
              if (theme === undefined) {
                theme = {
                  bg: "#61dafb",
                  fg: "#282c34",
                };
              }
              return (
                <ThemeProvider key={tag} theme={theme}>
                  <Link to={`/tags/${tag}`}>
                    <Pill key={tag}>{tag}</Pill>
                  </Link>
                </ThemeProvider>
              );
            })}
          </div>

          <p>{excerpt}</p>
          <div className="link">
            <Link to={slug}>[...]</Link>
          </div>
        </div>
      </CardContainer>
    );
  }
}

const themes = {
  node: {
    bg: "#026e00", //green
    fg: "#ffffff", //white
  },
  react: {
    bg: "#61dafb",
    fg: "#282c34",
  },
  gatsby: {
    bg: "#663399",
    fg: "#ffffff",
  },
  styledcomponents: {
    bg: "#da9e5d",
    fg: "#db7093",
  },
  OU: {
    bg: "#326fb4",
    fg: "#ffffff",
  },
  javascript: {
    bg: "#f5de19",
    fg: "#000000",
  },
  html: {
    bg: "#e54d26",
    fg: "#ffffff",
  },
  css: {
    bg: "#1b73ba",
    fg: "#ffffff",
  },
  netlify: {
    bg: "#01c6b5",
    fg: "#ffffff",
  },
  graphql: {
    bg: "#161f26",
    fg: "#e30098",
  },
};

const Pill = styled.span`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
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

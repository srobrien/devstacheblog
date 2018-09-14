import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "gatsby-link";

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
  margin: 5px 5px 5px 0px;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.75);
`;

export default class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
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
    );
  }
}

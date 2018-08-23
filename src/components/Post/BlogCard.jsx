import React, { Component } from "react";
import styled from "styled-components";

import stache from "../../images/icons/stache.svg";
import stachebg from "../../images/icons/stachebg.svg";
import react from "../../images/icons/react.svg";
import css from "../../images/icons/css.svg";
import gatsby from "../../images/icons/gatsby.svg";

const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 7px -1px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-content: space-around;
  margin-bottom: 40px;
  transition: 0.5s ease;
  &:hover {
    transform: ${({ alt }) => (alt ? "rotate(-2deg)" : "rotate(2deg)")};
    transition: 0.5s ease;
    cursor: pointer;
  }

  .logo {
    @media (max-width: 515px) {
      display: none;
    }
    background-color: lightgray;
    flex-basis: 20%;
    position: relative;
    text-align: center;
    order: ${({ alt }) => (alt ? "1" : "0")};
    img {
      margin-bottom: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      filter: drop-shadow(4px 3px 4px #000);
    }
  }
  .description {
    @media (max-width: 515px) {
      flex-basis: 100%;
    }
    transition: 0.5s ease;
    flex-basis: 80%;
    backface-visibility: hidden;
    padding: 10px;
    z-index: 2;
    &:hover {
      background-color: lightgray;
      transition: 0.5s ease;
    }
  }

  .background {
    @media (max-width: 515px) {
      background-size: cover;
      background-position: center;
      background-image: url(${stachebg});
    }
  }
`;

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

    return (
      <CardContainer alt={this.props.alt}>
        <div className="logo">
          <img src={logo} alt="react" height="80" />
        </div>

        <div className="description">
          <div className="background">
            <h3>Post Title</h3>
            <h4>Date</h4>
            <p>
              YOLO Bushwick distillery stumptown chillwave four loko street art
              pickled +1 kale chips gluten-free cred Austin PBR butcher before
              they sold out mustache farm-to-table Helvetica freegan raw d enim
              mixtape Tonx forage Pitchfork 8-bit
            </p>
          </div>
        </div>
      </CardContainer>
    );
  }
}

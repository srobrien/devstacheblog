import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from "../../images/icons/stache.svg";

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 20px repeat(9, 1fr);
  grid-template-rows: 20px repeat(4, 1fr);
  min-height: 300px;
  background-color: #e583e2;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239e7fa1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 100%);
  @media (max-width: 600px) {
    clip-path: none;
    grid-template-rows: 20px repeat(2, 1fr);
    min-height: 150px;
  }
`;

const TitleText = styled.div`
  grid-column: 2;
  grid-row: 2;
  align-self: center;
  justify-self: start;
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 2px;
  background-color: #fff;
  margin: 0;
  padding: 5px;
`;

const SubTitleText = styled.div`
  grid-column: 2 / span auto;
  grid-row: 3;
  align-self: center;
  justify-self: start;
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 2px;
  background-color: #fff;
  margin: 0;
  padding: 5px;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Logo = styled.div`
  grid-column: 3;
  grid-row: 2;
  align-self: center;
  justify-self: center;
  img {
    height: 60px;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <TitleText>DEVSTACHE</TitleText>
        {/* <Logo>
          <img src={logo} />
        </Logo> */}
        <SubTitleText>A JOURNEY FROM DRONGO TO DEV </SubTitleText>
      </HeaderWrapper>
    );
  }
}

import React, { Component } from "react";
import Link from "gatsby-link";
import styled, { keyframes } from "styled-components";
import logo from "../../images/icons/stache.svg";

const tashWiggle = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
            transform: translateX(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
            transform: translateX(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
            transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
            transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
            transform: translateX(-6px) rotate(1.2deg);
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 20px repeat(auto-fit, minmax(186px, 1fr));
  grid-template-rows: 20px repeat(4, 1fr);
  min-height: 300px;
  background-color: #e583e2;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239e7fa1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 100%);
  @media (max-width: 600px) {
    clip-path: none;
    grid-template-rows: 20px repeat(2, 1fr);
    min-height: 150px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

const TitleText = styled.div`
  grid-column: 2;
  grid-row: 2;
  align-self: center;
  justify-self: start;
	font-family: "Arimo", sans-serif;
	font-display: auto;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 2px;
  background-color: #fff;
  margin: 0;
  padding: 5px;
	&:hover{
		cursor: pointer;
	}
	}

	@media (max-width: 450px) {
    font-size: 2.5rem;
    img {
      height: 35px;
    }
  }

  @media (max-width: 365px) {
    font-size: 2.5rem;
    img {
      display: none;
    }
  }
`;

const SubTitleText = styled.div`
  grid-column-start: 2;
  column-span: auto;
  grid-row: 3;
  overflow-wrap: normal;
  align-self: center;
  justify-self: start;
  font-family: "Arimo", sans-serif;
  font-display: auto;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 2px;
  background-color: #fff;
  margin: 0;
  padding: 5px 0 5px 5px;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const Tash = styled.img`
  height: 45px;
  vertical-align: middle;
  padding-right: 5px;
  padding-bottom: 5px;
  margin: 0;
  ${TitleText}:hover & {
    animation: ${tashWiggle} 1.5s 1 both;
    transform: translate3d(0, 0, 0);
  }
`;

const StyledLink = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <TitleText>
          <StyledLink to="/">
            DEVSTACHE <Tash src={logo} alt="title logo" />
          </StyledLink>
        </TitleText>

        <SubTitleText>A JOURNEY FROM DRONGO TO DEV </SubTitleText>
      </HeaderWrapper>
    );
  }
}

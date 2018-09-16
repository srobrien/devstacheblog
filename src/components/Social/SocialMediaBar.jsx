import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = styled.ul`
  @media (max-width: 620px) {
    display: none;
  }
  list-style: none;
  list-style-type: none;
  bottom: 10px;
  padding: 0;
  left: 0;
  text-align: center;
  position: fixed;
  z-index: 2;
`;

const SocialButton = styled.li`
  text-align: right;
  background: rgba(77, 77, 77, 0.4);
  padding: 0;
  padding-right: ${props => props.padding}px;
  padding-top: 6px;
  margin: 0;
  height: 45px;
  width: 40px;
  transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    background: ${props => props.bgColor};
    width: 90px;
    cursor: pointer;
  }
`;

const SocialMediaBar = () => {
  return (
    <SocialBar>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <SocialButton bgColor="rgba(59, 89, 152, 1)" padding="11">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            style={{ color: "#fff" }}
          />
        </SocialButton>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <SocialButton bgColor="rgba(29, 161, 242, 1)" padding="3">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            style={{ color: "#fff" }}
          />
        </SocialButton>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <SocialButton padding="6" bgColor="rgba(244, 71, 71, 1)">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ color: "#fff" }}
          />
        </SocialButton>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <SocialButton padding="4" bgColor="rgba(33, 31, 31, 1)">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            style={{ color: "#fff" }}
          />
        </SocialButton>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <SocialButton padding="6" bgColor="rgba(0, 119, 181, 1)">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            style={{ color: "#fff" }}
          />
        </SocialButton>
      </a>
    </SocialBar>
  );
};

export default SocialMediaBar;

import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faGithub,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

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
`

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
`

export default class SocialMediaBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount = () => {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state
    if (loaded) {
      return (
        <SocialBar>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton bgColor="rgba(59, 89, 152, 1)" padding="11">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                style={{ color: '#fff' }}
              />
            </SocialButton>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton bgColor="rgba(29, 161, 242, 1)" padding="3">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: '#fff' }}
              />
            </SocialButton>
          </a>

          <a
            href="https://www.instagram.com/rosco_p_c0ltrane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton padding="6" bgColor="rgba(244, 71, 71, 1)">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: '#fff' }}
              />
            </SocialButton>
          </a>

          <a
            href="https://github.com/srobrien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton padding="4" bgColor="rgba(33, 31, 31, 1)">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: '#fff' }}
              />
            </SocialButton>
          </a>

          <a
            href="https://www.linkedin.com/in/ross-o-brien-6b429616a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton padding="6" bgColor="rgba(0, 119, 181, 1)">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                style={{ color: '#fff' }}
              />
            </SocialButton>
          </a>
        </SocialBar>
      )
    }
    return <div />
  }
}

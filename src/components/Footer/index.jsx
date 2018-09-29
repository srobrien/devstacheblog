import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const FooterBar = styled.div`
  position: relative;
  background-color: #70c8c2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23e6e3ec' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
  min-height: 350px;
  padding-top: 30px;
  text-align: center;
  .toastr {
    background-color: #e583e2;
    font-size: 22px;
  }
`;

const FormSection = styled.div`
  position: absolute;
  right: 5%;
  bottom: 15%;
  @media (max-width: 500px) {
    position: relative;
    margin-top: 150px;
    text-align: center;
    right: unset;
    h3 {
      width: 305px !important;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h3 {
    width: 140px;
    background: black;
    color: #e583e2;
    font-size: 22px;
    padding: 3px;
    display: block;
		white-space: nowrap;
  	overflow: hidden;
  }

  input {
    height: 45px;
    width: 250px;
    border: 1px solid #e583e2;
    border-radius: 4px 0 0 4px;
    padding: 5px;
    padding-left: 10px;
    font-size: 16px;
    display: inline-block;
    vertical-align: bottom;

    &:focus {
      outline: none !important;
      border: 1px solid #e583e2;
    }
  }

  button {
    height: 45px;
    width: 55px;
    border: 1px solid #e583e2;
    border-radius: 0 4px 4px 0;
    background: #e583e2;
    display: inline-block;
    cursor: pointer;
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: #fff;
  transform: translateX(0px);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(6px);
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        this.setState({ email: "" });
        this.successMsg();
      })
      .catch(error => this.errorMsg());

    e.preventDefault();
  };

  successMsg = () => {
    toast.success("Success!", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "toastr",
    });
  };

  errorMsg = () => {
    toast.error("Oops! Something went wrong!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  render() {
    const { email } = this.state;
    return (
      <FooterBar>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="email" name="email" />
        </form>
        <FormSection>
          <form onSubmit={this.handleSubmit}>
            <h3>MAILING LIST</h3>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Enter email address"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <button>
              <FontAwesomeIconStyled icon={faEnvelope} size="2x" />
            </button>
          </form>
        </FormSection>
        <ToastContainer className="post" autoClose={2000} />
      </FooterBar>
    );
  }
}

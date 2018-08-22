import React, { Component } from "react";

export default class LogoImage extends Component {
  render() {
    const { imageURL } = this.props;
    console.log(this.props);
    return <img src={imageURL} alt="Devstache" />;
  }
}

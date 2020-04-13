import React, { Component } from "react";
import { FadeLoader } from "halogenium";

export default class Loader extends Component {
  render() {
    return (
      <FadeLoader
        color="rgb(58, 57, 57, .8)"
        size="10px"
        height="15px"
        width="3px"
        margin="270px 730px"
      />
    );
  }
}

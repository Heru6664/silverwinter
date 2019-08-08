import React, { Component } from "react";
import Home from "../home/home";
import About from "../about/about";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <About theme="dark" />
      </div>
    );
  }
}

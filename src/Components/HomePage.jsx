import React, { Component, ReactFragment } from "react";
import Carousel from "./Carousel";
import Products from "./Products";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Products />
      </React.Fragment>
    );
  }
}

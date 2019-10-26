import React, { Component, ReactFragment } from "react";
import Carousel from "./Carousel";
import Products from "./Products";
import Footer from "./Footer";
import Footnote from "./Footnote";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Products />
        <Footer />
        <Footnote />
      </React.Fragment>
    );
  }
}

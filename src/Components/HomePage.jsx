import React, { Component, ReactFragment } from "react";
import Carousel from "./Carousel";
import Products from "./Products";
import Footer from "./Footer";
import Footnote from "./Footnote";
import ConnectForm from "./ConnectForm";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Products />
        <ConnectForm />
        <Footer />
        <Footnote />
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import p2 from "./p2.jpg";
import products from "../products";
export default class ProductDetails extends Component {
  render() {
    let index = this.props.match.params.id;

    let arrIndex = parseInt(index);

    console.log(p2);

    const { id, heading, subHeading, text, imgSrc } = products[arrIndex - 1];

    return (
      <div className="container-fluid productDetailsContainer">
        <div className="row">
          <div className="col rotated">
            <a href="javascript:history.back(1)" style={{ color: "black" }}>
              {" "}
              Home <br />
              <i class="material-icons" style={{ fontSize: "170%" }}>
                arrow_drop_up
              </i>
            </a>
          </div>
          <div className="col s11">
            <div className="row" style={{ marginTop: "8%" }}>
              <div className="col s6" style={{ marginTop: "2%" }}>
                <img src={imgSrc} alt="" srcset="" />
              </div>
              <div className="col s6">
                <div className="row" style={{ marginBottom: "0" }}>
                  <div
                    className="col s12 fontM"
                    style={{
                      fontSize: "240%",
                      textAlign: "left",
                      marginBottom: "0"
                    }}
                  >
                    {heading}
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col s12 fontM"
                    style={{ fontSize: "240%", textAlign: "left" }}
                  >
                    {subHeading}
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div
                    className="col s12 fontM"
                    style={{
                      fontSize: "160%",
                      textAlign: "left",
                      marginTop: "2%",
                      marginBottom: "5%"
                    }}
                  >
                    {text}
                  </div>
                </div>
                <div
                  className="row"
                  style={{ textAlign: "left", paddingLeft: "1.3%" }}
                >
                  {" "}
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "2%",
                      borderRadius: "6px",
                      width: "80%",
                      fontFamily: "montserrat"
                    }}
                  >
                    ENQUIRE NOW
                  </button>
                </div>
                <div
                  className="row"
                  style={{ textAlign: "left", paddingLeft: "1.3%" }}
                >
                  {" "}
                  <button
                    style={{
                      backgroundColor: "#bcbcb8",
                      color: "black",
                      padding: "2%",
                      borderRadius: "6px",
                      width: "80%"
                    }}
                  >
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
              <div className="col s12">
                <p style={{ fontSize: "120%" }}>
                  12 variations available{" "}
                  <span style={{ textDecoration: "underline" }}>View</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

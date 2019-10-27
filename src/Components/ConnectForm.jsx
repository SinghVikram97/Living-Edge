import React, { Component } from "react";
import "./ConnectForm.css";
export default class ConnectForm extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            paddingLeft: "0",
            marginLeft: "0.85%",
            marginRight: "0.85%"
          }}
        >
          <div
            className="col s6"
            style={{
              backgroundColor: "#e9e9e9",
              borderRight: "10px solid white",
              paddingTop: "4%",
              paddingLeft: "2%",
              paddingBottom: "0.8%"
            }}
          >
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col s12"
                style={{
                  fontSize: "150%",
                  fontWeight: "bold",
                  fontFamily: "montserrat"
                }}
              >
                Newsletter
              </div>
            </div>
            <div className="row left-align">
              <div className="col s12">
                <p
                  style={{
                    marginBottom: "0",
                    marginTop: "0",
                    fontSize: "120%"
                  }}
                >
                  Be the first to know about Living Edge special
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    fontSize: "120%"
                  }}
                >
                  offers, new product launches and studio events.
                </p>
              </div>
            </div>
            <div className="row left-align" style={{ paddingTop: "2%" }}>
              <div className="col s4">
                <label>
                  <input type="checkbox" />
                  <span style={{ color: "black" }}>Commercial</span>
                </label>
              </div>
              <div className="col s4">
                <label>
                  <input type="checkbox" />
                  <span style={{ color: "black" }}>Residential</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s5">
                <input id="email" type="text" class="validate" />
                <label for="email" style={{ color: "black" }}>
                  Email
                </label>
              </div>
              <div class="input-field col s5">
                <input id="postcode" type="text" class="validate" />
                <label for="postcode" style={{ color: "black" }}>
                  Postcode
                </label>
              </div>
            </div>
            <div className="row left-align">
              <div className="col s12">
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "2%",
                    borderRadius: "6px",
                    width: "98%",
                    fontFamily: "montserrat"
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div
            className="col s6"
            style={{
              backgroundColor: "#e9e9e9",
              borderRight: "10px solid white",
              paddingTop: "4%",
              paddingLeft: "2%",
              paddingBottom: "1.9%"
            }}
          >
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col s12"
                style={{
                  fontSize: "150%",
                  fontWeight: "bold",
                  fontFamily: "montserrat",
                  marginBottom: "3%"
                }}
              >
                Create an account
              </div>
            </div>
            <div className="row left-align" style={{ marginBottom: "10%" }}>
              <div className="col s12">
                <p
                  style={{
                    marginBottom: "0",
                    marginTop: "0",
                    fontSize: "120%"
                  }}
                >
                  View orders, create wish lists and proceed through checkout
                  faster.
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    fontSize: "120%"
                  }}
                >
                  Architects and designers can access additional product and
                  pricing
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    fontSize: "120%"
                  }}
                >
                  info and other resources.
                </p>
              </div>
            </div>
            <div className="row left-align">
              <div className="col s12">
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "2%",
                    borderRadius: "6px",
                    width: "98%",
                    fontFamily: "montserrat"
                  }}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
            <div className="row left-align">
              <div className="col s12">
                <button
                  style={{
                    backgroundColor: "#bcbcb8",
                    color: "black",
                    padding: "2%",
                    borderRadius: "6px",
                    width: "98%"
                  }}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

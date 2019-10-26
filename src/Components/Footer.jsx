import React, { Component } from "react";
import fb from "./fb.png";
import twitter from "./twitter.png";
import insta from "./insta.png";
import pin from "./pin.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
export default class Footer extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "3%", marginBottom: "4%" }}
      >
        <div className="row">
          <div className="col s6">
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col s12"
                style={{ fontWeight: "bold", fontSize: "120%" }}
              >
                Contact Us
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              {" "}
              <div className="col s12">
                <div>Talk to us on 1300 132 154</div>
                <div style={{ textDecoration: "underline" }}>
                  info@livingedge.com.au
                </div>{" "}
                <div style={{ textDecoration: "underline" }}>Visit us here</div>
              </div>
            </div>
          </div>
          <div className="col s3" style={{ paddingLeft: "8%" }}>
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col s12"
                style={{ fontWeight: "bold", fontSize: "120%" }}
              >
                Useful Information
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              {" "}
              <div className="col s6">
                <div style={{ textDecoration: "underline" }}>Sales terms</div>{" "}
                <div style={{ textDecoration: "underline" }}>Customer care</div>{" "}
                <div style={{ textDecoration: "underline" }}>Delivery</div>
              </div>
              <div className="col s6">
                <div style={{ textDecoration: "underline" }}>
                  Architect accounts
                </div>{" "}
                <div style={{ textDecoration: "underline" }}>Careers</div>{" "}
                <div style={{ textDecoration: "underline" }}>Returns</div>
              </div>
            </div>
          </div>
          <div className="col s3" style={{ paddingLeft: "6%" }}>
            {" "}
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col s12"
                style={{ fontWeight: "bold", fontSize: "120%" }}
              >
                Connect with us
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              {" "}
              <div className="col s12">
                <img src={fb} alt="" srcset="" style={{ marginRight: "2%" }} />
                <img
                  src={twitter}
                  alt=""
                  srcset=""
                  style={{ marginRight: "2%" }}
                />
                <img
                  src={insta}
                  alt=""
                  srcset=""
                  style={{ marginRight: "2%" }}
                />
                <img src={pin} alt="" srcset="" style={{ marginRight: "2%" }} />
                <img
                  src={linkedin}
                  alt=""
                  srcset=""
                  style={{ marginRight: "2%" }}
                />
                <img
                  src={mail}
                  alt=""
                  srcset=""
                  style={{ marginRight: "2%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

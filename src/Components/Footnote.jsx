import React, { Component } from "react";

export default class Footnote extends Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: "4%" }}>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col s6">
            ® Living Edge is a trademark owned by Living Edge (Aust) Pty Ltd.
          </div>
          <div
            className="col s1"
            style={{ textDecoration: "underline", marginLeft: "7.2%" }}
          >
            Privacy
          </div>
          <div className="col s2" style={{ textDecoration: "underline" }}>
            Website terms
          </div>
          <div className="col s2">
            Crafted at{" "}
            <span style={{ textDecoration: "underline" }}>Future Büro</span>
          </div>
        </div>
      </div>
    );
  }
}

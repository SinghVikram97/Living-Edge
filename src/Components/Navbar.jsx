import React, { Component } from "react";
import "./Navbar.css";
import logo from "../logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav id="mainNav">
          <div class="nav-wrapper" style={{ textAlign: "left" }}>
            <a href="#!" class="brand-logo">
              <img src={logo} alt="" srcset="" />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">
                  {" "}
                  <i class="material-icons">menu</i>
                </a>
              </li>
              <li>
                <a href="badges.html">
                  {" "}
                  <i class="material-icons">search</i>
                </a>
              </li>
              <li>
                <a href="collapsible.html">
                  {" "}
                  <i class="material-icons">person</i>
                </a>
              </li>
              <li>
                <a href="mobile.html">
                  {" "}
                  <i class="material-icons">shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}

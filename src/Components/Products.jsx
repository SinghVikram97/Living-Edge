import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Products.css";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.jpg";
let time = "";
export default class Products extends Component {
  componentDidMount() {
    let sideNav = $(".sidenav");
    M.Sidenav.init(sideNav);
    let carousel = $(".carousel.carousel-slider");
    M.Carousel.init(
      carousel,
      {
        fullWidth: true,
        indicators: true
      },
      (time = setTimeout(autoplay, 4500))
    );
    function autoplay() {
      let carouselNext = $(".carousel.carousel-slider");
      let instance = M.Carousel.getInstance(carouselNext);
      instance.next();
      // $(".carousel").carousel("next");
      time = setTimeout(autoplay, 4500);
    }
  }
  componentWillUnmount = () => {
    clearTimeout(time);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "4%" }}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s12">
                <h5 class="alignleft">Featured Products.</h5>
                <h5 class="alignright" style={{ textDecoration: "underline" }}>
                  View All.
                </h5>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
            <div className="row">
              <div className="col s6">
                <div className="productContainer">
                  <img src={p1} style={{ width: "100%" }} />
                  <div class="bottom-left">
                    Hopper 8-Seater Picnic Table in Iroko Hardwood White
                  </div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/1"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
              <div className="col s3">
                <div className="productContainer">
                  <img src={p2} style={{ width: "100%" }} />
                  <div class="bottom-left">Monkey side table</div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/2"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
              <div className="col s3">
                <div className="productContainer">
                  <img src={p3} style={{ width: "100%" }} />
                  <div class="bottom-left">Garden arm chair</div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/3"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <div className="productContainer">
                  <img src={p4} style={{ width: "100%" }} />
                  <div class="bottom-left">Picnik</div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/4"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
              <div className="col s3">
                <div className="productContainer">
                  <img src={p5} style={{ width: "100%" }} />
                  <div class="bottom-left">Virus outdoor seater</div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/5"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="productContainer">
                  <img src={p6} style={{ width: "100%" }} />
                  <div class="bottom-left">Bench B outdoor</div>
                  <div class="productOverlay"></div>
                  <div class="productButton">
                    <Link to="/product/6"> VIEW DETAILS </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

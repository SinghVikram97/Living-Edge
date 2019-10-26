import React, { Component } from "react";
import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import c3 from "./c3.jpg";
import c4 from "./c4.jpg";
import "./Carousel.css";
export default class Carousel extends Component {
  render() {
    return (
      <div class="carousel carousel-slider">
        <a class="carousel-item" href="#one!">
          <div className="carouselContainer">
            <img src={c1} />
            <div class="bottom-left">Meticulous Craftsmanship.</div>
          </div>
        </a>
        <a class="carousel-item" href="#two!">
          <div className="carouselContainer">
            <img src={c2} />
            <div class="bottom-left">Radiant Light. Delicate Balance.</div>
          </div>
        </a>
        <a class="carousel-item" href="#three!">
          <div className="carouselContainer">
            <img src={c3} />
            <div class="bottom-left">
              Bring Your Vision To Life With Design Studio.
            </div>
          </div>
        </a>
        <a class="carousel-item" href="#four!">
          <div className="carouselContainer">
            <img src={c4} />
            <div class="bottom-left">Welcoming Derlot Editions.</div>
          </div>
        </a>
      </div>
    );
  }
}

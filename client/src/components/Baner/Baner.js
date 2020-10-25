import React, { Component } from "react";
import { Slider } from "react-materialize";

import { Slide1 } from "./Slides/Slide1";
import { Slide2 } from "./Slides/Slide2";
import { Slide3 } from "./Slides/Slide3";


import "./Baner.sass";

const options = {
  indicators: true,
  interval: 5000,
  duration: 600,
  height: 450
};

class Baner extends Component {
  componentDidMount() {
    activeIndicator();
  }
  render() {
    return (
      <Slider options={options}>
        <Slide1></Slide1>
        <Slide2></Slide2>
        <Slide3></Slide3>
      </Slider>
    );
  }
}

const activeIndicator = () => {
  window.addEventListener("DOMContentLoaded", function() {
    let indicators = document.getElementsByClassName("indicator-item");
    let content = document.getElementsByClassName("slide1Content");
    indicators[0].classList.add("active");
    content[0].classList.add("anim");
    const removeClass = ind => {
      ind.addEventListener("click", () => {
        content[0].classList.remove("anim");
      });
    };
    removeClass(indicators[1]);
    removeClass(indicators[2]);
    indicators[0].addEventListener("click", () => {
      content[0].classList.add("anim");
    });
  });
};

export default Baner;

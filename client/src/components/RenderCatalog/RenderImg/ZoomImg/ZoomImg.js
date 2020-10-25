import React, { Component } from "react";
import PropTypes from "prop-types";

export class ZoomImg extends Component {
  constructor(props) {
    super(props);
    this.MouseMove = this.MouseMove.bind(this);
    this.MouseLeave = this.MouseLeave.bind(this);
    this.state = {
      on: true
    };
  }
  Style() {
    const { src, typeProduct } = this.props;
    let backgroundSize = (() => {
      return typeProduct === `drinks` ? `90%` : `160%`;
    })();
    return {
      backgroundImage: `url(${src})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `${backgroundSize}`,
      position: `relative`,
      height: `255px`,
      overflow: `hidden`,
      cursor: `pointer`
    };
  }
  Zoom(e) {
    let metering = e.target.getBoundingClientRect(),
      x = e.clientX - metering.left,
      y = e.clientY - metering.top,
      xPercent = Math.round(100 / (metering.width / x)),
      yPercent = Math.round(100 / (metering.height / y));
    e.target.style.backgroundPosition = xPercent + "%" + yPercent + "%";
  }
  MouseMove(e) {
    this.setState({ on: true }, this.Zoom(e));
  }
  MouseLeave(e) {
    this.setState({ on: true });
  }
  render() {
    return (
      <>
        <div
          style={this.Style()}
          onMouseMove={this.MouseMove}
          onMouseLeave={this.MouseLeave}
        />
      </>
    );
  }
}

ZoomImg.propTypes = {
  src: PropTypes.string.isRequired,
  typeProduct: PropTypes.string.isRequired
};

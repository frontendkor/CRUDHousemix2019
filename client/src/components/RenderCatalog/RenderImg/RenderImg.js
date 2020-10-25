import React, { Component } from "react";
import PropTypes from "prop-types";
import { Img } from "./Img/Img";
import { ZoomImg } from "./ZoomImg/ZoomImg";

import mod from "./RenderImg.module.sass";

export class RenderImg extends Component {
  constructor(props) {
    super(props);
    this.MouseMove = this.MouseMove.bind(this);
    this.MouseLeave = this.MouseLeave.bind(this);
    this.ImgRef = React.createRef();
  }
  MouseMove(e) {
    this.ImgRef.current.classList.add(`${mod.ImgContainerOpasity}`);
  }
  MouseLeave(e) {
    this.ImgRef.current.classList.remove(`${mod.ImgContainerOpasity}`);
  }
  render() {
    const { src, typeProduct } = this.props;
    return (
      <>
        <div
          onMouseMove={this.MouseMove}
          onMouseLeave={this.MouseLeave}
          className={mod.AllImgContainer}
        >
          <div className={mod.ImgContainer} ref={this.ImgRef}>
            <Img src={src} />
          </div>
          <div className={mod.ZoomImgContainer}>
            <ZoomImg src={src} typeProduct={typeProduct} />
          </div>
        </div>
      </>
    );
  }
}

RenderImg.propTypes = {
  src: PropTypes.string.isRequired,
  typeProduct: PropTypes.string.isRequired
};

import React, { Component } from "react";
import { connect } from "react-redux";
import RenderLinks from "./RenderLinks";
import "./NavRight.sass";

class NavRight extends Component {
  render() {
    const { sum, classis } = this.props;
    return (
      <div className={classis}>
        <RenderLinks sum={sum} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    sum: store.cartData.sum
  };
};

export default connect(
  mapStateToProps,
  null
)(NavRight);

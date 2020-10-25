import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Collection } from "react-materialize";
import CartItem from "./CartItem";

import CartPrice from "./CartPrice";

import { connect } from "react-redux";
import removeProduct from "../../actions/Cart/removeProduct";
import controlTheAmountOfProduct from "../../actions/Cart/controlTheAmountOfProduct";

import "./Cart.sass";

class Cart extends Component {
  renderCartItem() {
    const { removeProduct, controlTheAmountOfProduct, cartData } = this.props;
    const { cart } = cartData;
    return cart.map(({ id, img, price, name, sizePizza, count }) => {
      return (
        <CartItem
          key={id}
          id={id}
          img={img}
          price={price}
          name={name}
          count={count}
          sizePizza={sizePizza}
          removeProduct={removeProduct}
          controlTheAmountOfProduct={controlTheAmountOfProduct}
          cartData={cartData}
        />
      );
    });
  }
  render() {
    const { cart, sum } = this.props.cartData;
    return (
      <Col m={12} s={12} className="CartCollection">
        <Collection>
          {!cart || cart.length === 0 ? (
            <p className="CartEmpty">Нет товаров</p>
          ) : (
            <>{this.renderCartItem()}</>
          )}
          <CartPrice sum={sum} />
        </Collection>
      </Col>
    );
  }
}

const mapStateToProps = store => {
  return {
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: (product, cartData) =>
      dispatch(removeProduct(product, cartData)),
    controlTheAmountOfProduct: (product, move, cartData) =>
      dispatch(controlTheAmountOfProduct(product, move, cartData))
  };
};

Cart.propTypes = {
  cartData: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
  controlTheAmountOfProduct: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

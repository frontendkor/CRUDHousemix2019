import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RenderCard from "./RenderCard/RenderCard";

import addProduct from "../../actions/Cart/addProduct";

class RenderCatalog extends Component {
  RenderProductCard() {
    const { addProduct, cartData, typeProduct, products } = this.props;
    return products.map(item => {
      return (
        item.typeProduct === typeProduct && (
          <RenderCard
            key={item.id}
            data={item}
            typeProduct={typeProduct}
            addProduct={addProduct}
            cartData={cartData}
          />
        )
      );
    });
  }
  render() {
    return <>{this.RenderProductCard()}</>;
  }
}

const mapStateToProps = store => {
  return {
    products: store.catalog.products,
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, cartData) => dispatch(addProduct(product, cartData))
  };
};

RenderCatalog.propTypes = {
  typeProduct: PropTypes.string.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderCatalog);

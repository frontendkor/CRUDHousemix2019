import React, { Component } from "react";
import PropTypes from "prop-types";
import Result from "./Result/Result";

import SearchForm from "../Forms/SearchForm/SearchForm";
import { connect } from "react-redux";
import addProduct from "../../actions/Cart/addProduct";

import "./Search.sass";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      result: false
    };
  }
  onSearchText(inputValue) {
    this.setState({ searchText: inputValue });
  }
  onSearch(e) {
    e.preventDefault();
    const { searchText } = this.state;
    const { products } = this.props.dataProducts;
    let result = products.filter(
      item => item.composition.toLowerCase().indexOf(searchText) > -1
    );
    return result.length > 0 && this.setState({ result: result });
  }
  render() {
    const { result } = this.state;
    const { addProduct, cartData } = this.props;
    return (
      <>
        <SearchForm
          onSearchText={this.onSearchText.bind(this)}
          onSearch={this.onSearch.bind(this)}
        />
        <h6 className="SearchResult">Результаты поиска</h6>
        {result.length > 0 && (
          <Result data={result} addProduct={addProduct} cartData={cartData} />
        )}
        {result.length <= 0 && (
          <p className="SearchFormResultNo">Ни чего не найдено</p>
        )}
        {result === false && <p className="SearchResultDots">...</p>}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    dataProducts: store.catalog,
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, cart) => dispatch(addProduct(product, cart))
  };
};

Search.propTypes = {
  dataProducts: PropTypes.shape({
    products: PropTypes.array.isRequired
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

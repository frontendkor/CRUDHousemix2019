import React, { Component } from "react";
import PropTypes from "prop-types";
import Btn from "../../Btn/Btn";
import "./SearchForm.sass";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  inputChange(e) {
    const { value } = e.currentTarget;
    this.setState({ inputValue: value }, () => {
      this.props.onSearchText(this.state.inputValue);
    });
  }
  render() {
    const { inputValue } = this.state;
    return (
      <form className="SearchForm">
        <div className="SearchFormInputContainer">
          <input
            type="search"
            placeholder="Введите ингредиент"
            value={inputValue}
            onChange={this.inputChange.bind(this)}
          />
        </div>

        <div className="SearchFormBtnContainer">
          <Btn
            type="btn"
            submit={true}
            title="Найти"
            size="medium"
            onClick={this.props.onSearch}
          />
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;

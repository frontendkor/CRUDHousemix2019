import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import SendCart from "../../../actions/Profile/SendCart";
// import openModal from "../../../actions/Modal/openModal";

class ContactFormContainer extends Component {
  submit(data) {
    const { SendCart } = this.props;
    const products = this.filterProducts();
    data.cart = { products, sum: `${this.props.cartData.sum}р` };
    data.userId = this.props.profile.userId;
    data.login = this.props.profile.login;
    SendCart(data);
    // openModal(true);
  }
  filterProducts() {
    return this.props.cartData.cart.map(item => {
      const name = item.sizePizza
        ? `${item.name} ${item.sizePizza}`
        : item.name;
      return {
        name: name,
        count: `${item.count} шт`,
        price: `На сумму ${item.price}р`
      };
    });
  }
  getInitialValues() {
    return {
      phone: this.props.profile.phone,
      phone2: this.props.profile.phone2,
      receiverName: this.props.profile.receiverName,
      street: this.props.profile.street,
      house: this.props.profile.house,
      apartment: this.props.profile.apartment,
      comment: this.props.profile.comment
    };
  }
  render() {
    // const { wait } = this.props;
    return (
      <>
        <ContactForm
          // wait={wait}
          onSubmit={this.submit.bind(this)}
          initialValues={this.getInitialValues()}
        />
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    profile: store.profile,
    // wait: store.profile.wait,
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SendCart: data => dispatch(SendCart(data))
    // openModal: isOpen => dispatch(openModal(isOpen))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFormContainer);

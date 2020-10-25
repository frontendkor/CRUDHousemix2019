import React from "react";
import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";
import Cart from "../../components/Cart/Cart";

import "./CartPageTitle.sass";

const CartPage = props => {
  return (
    <Row>
      <PageTitle classis="CartPageTitle" title="Товары в вашей корзине" />
      <Cart />
    </Row>
  );
};

export default CartPage;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Card, Toast } from "react-materialize";
import { RenderImg } from "../RenderImg/RenderImg";
import { PizzaSizeBtn } from "../PizzaSizeBtn/PizzaSizeBtn";
import "./RenderCard.sass";

class RenderCard extends Component {
  constructor(props) {
    super(props);
    const { typeProduct } = this.props;
    const { id, price, coffe } = this.props.data;
    this.state = {
      img: coffe
        ? `data/catalog/img/drinks/coffe.png`
        : `data/catalog/img/${typeProduct}/${id}.png`,
      sizePizza: "25",
      currentPrice: typeProduct === `pizza` ? price[2] : price[0]
    };
    this.pizzaPrice = this.pizzaPrice.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
  }

  // add product to cart
  addProductCart() {
    const { name, id } = this.props.data;
    const { typeProduct, addProduct, cartData } = this.props;
    const { img, currentPrice, sizePizza } = this.state;
    const product = {
      price: currentPrice,
      count: 1,
      id,
      name,
      img
    };
    if (typeProduct === `pizza`) {
      product.id = `${id}${sizePizza}`;
      product.pizzaPrice = sizePizza;
    }
    addProduct(product, cartData);
  }

  // change the price by pressing the pizza size button
  pizzaPrice(e) {
    let size = e.currentTarget.innerText;
    let priceNowSet = e.currentTarget.value;
    this.setState({
      sizePizza: parseInt(size),
      currentPrice: +priceNowSet
    });
  }

  render() {
    const { id, name, composition, price } = this.props.data;
    const { typeProduct } = this.props;
    const { img, currentPrice } = this.state;
    const { pizzaPrice, addProductCart } = this;
    return (
      <Col xl={4} l={4} m={6} s={12}>
        <Card
          header={<RenderImg src={img} typeProduct={typeProduct} />}
          reveal={<p>{composition}</p>}
          title={name}
        >
          {typeProduct === `pizza` && (
            <PizzaSizeBtn id={id} price={price} pizzaPrice={pizzaPrice} />
          )}
          <div className="cardPrice">
            Цена: <span>{currentPrice} p</span>
          </div>
          <div onClick={addProductCart} className="ToastBtnContainer">
            <Toast className="ToastBtn" options={{ html: "Товар добавлен" }}>
              В корзину
            </Toast>
          </div>
        </Card>
      </Col>
    );
  }
}

// RenderCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.array.isRequired,
//   typeProduct: PropTypes.string.isRequired
// };

export default RenderCard;

import React from "react";
import { CollectionItem, Icon, Button } from "react-materialize";

const CartItem = props => {
  const {
    id,
    img,
    price,
    name,
    sizePizza,
    count,
    removeProduct,
    controlTheAmountOfProduct,
    cartData
  } = props;
  const itemRemove = e => {
    let product = { id, price };
    removeProduct(product, cartData);
  };
  const itemAmount = e => {
    let move = e.currentTarget.innerText;
    let product = { id, price };
    controlTheAmountOfProduct(product, move, cartData);
  };
  return (
    <CollectionItem key={id}>
      <img src={img} alt={name} className="CartImg" />
      <span className="CartTitle">{`${name} ${sizePizza ? sizePizza : ""} ${
        sizePizza ? "см" : ""
      } `}</span>
      <div className="CartAmountProduct">
        <Button node="a" waves="light" small onClick={itemAmount} value={true}>
          +
        </Button>
        <span className="amount">{`${count} шт`}</span>
        <Button node="a" waves="light" small onClick={itemAmount} value={false}>
          -
        </Button>
      </div>
      <div className="CartPrice">
        <p>{`${price.toFixed(1)} р`}</p>
      </div>
      <button className="CartItemRemove" onClick={itemRemove.bind(this)}>
        <Icon tiny>close</Icon>
      </button>
    </CollectionItem>
  );
};

export default CartItem;

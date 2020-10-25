import totalCostOfTheOrder from "./totalCostOfTheOrder";

export const CONTROL_THE_AMOUNT_OF_PRODUCT = "CONTROL_THE_AMOUNT_OF_PRODUCT";

const controlTheAmountOfProduct = (product, move, cartData) => {
  return dispatch => {
    let cart = cartData.cart;
    let sum = cartData.sum;
    // Remove - Add product
    RemoveAddProduct(product, cart, move);
    // Calculate the amount of purchases
    sum = totalCostOfTheOrder(cart);
    dispatch(action(cart, sum));
  };
};

const RemoveAddProduct = (product, cart, move) => {
  cart.forEach((item, i, cart) => {
    let priceUnit = product.price / cart[i].count;
    const reduceAmount = () => {
      cart[i].count--;
      cart[i].price = cart[i].price - priceUnit;
    };
    const addAmount = () => {
      cart[i].count++;
      let price = priceUnit * cart[i].count;
      price = price.toFixed(1);
      cart[i].price = +price;
    };
    if (item.id === product.id) {
      move === "+" && addAmount();
      if (move === "-") {
        cart[i].count > 1 ? reduceAmount() : cart.splice(i, 1);
      }
    }
  });
};

const action = (cart, sum) => {
  return {
    type: CONTROL_THE_AMOUNT_OF_PRODUCT,
    payload: {
      cart,
      sum
    }
  };
};

export default controlTheAmountOfProduct;

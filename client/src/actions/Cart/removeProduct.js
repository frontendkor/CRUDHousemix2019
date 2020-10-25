import totalCostOfTheOrder from "./totalCostOfTheOrder";

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const removeProduct = (product, cartData) => {
  return dispatch => {
    let cart = cartData.cart;
    let sum = cartData.sum;
    // Remove product
    RemoveProduct(product, cart);
    // Calculate the amount of purchases
    sum = totalCostOfTheOrder(cart);
    dispatch(action(cart, sum));
  };
};

const RemoveProduct = (product, cart) => {
  cart.forEach((item, i, cart) => {
    if (item.id === product.id) {
      cart = cart.splice(i, 1);
    }
  });
};

const action = (cart, sum) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      cart,
      sum
    }
  };
};

export default removeProduct;

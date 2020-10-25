import calculateTheAmount from "./totalCostOfTheOrder";

export const ADD_PRODUCT = "ADD_PRODUCT";

const addProduct = (product, cartData) => {
  return dispatch => {
    let cart = cartData.cart;
    // Add product to cart
    addProductToCart(cart, product);
    // Calculate the amount of purchases
    let sum = calculateTheAmount(cart);
    dispatch(action(cart, sum));
  };
};

const addProductToCart = (cart, product) => {
  if (cart.length === 0) {
    cart.push(product);
  } else {
    let productInCart = cart.find((item, i, cart) => {
      return item.id === product.id ? true : false;
    });
    // If the product has been added previously, then increase its quantity.
    if (productInCart) {
      productInCart.count++;
      productInCart.price += product.price;
    } else {
      cart.push(product);
    }
  }
};

const action = (cart, sum) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      cart,
      sum
    }
  };
};

export default addProduct;

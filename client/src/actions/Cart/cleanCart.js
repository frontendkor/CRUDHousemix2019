export const CLEAN_CART = "CLEAN_CART";

const cleanCart = () => {
  return {
    type: CLEAN_CART,
    payload: {
      cart: [],
      sum: 0
    }
  };
};

export default cleanCart;

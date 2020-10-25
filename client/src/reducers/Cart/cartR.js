import { ADD_PRODUCT } from "../../actions/Cart/addProduct";
import { REMOVE_PRODUCT } from "../../actions/Cart/removeProduct";
import { CLEAN_CART } from "../../actions/Cart/cleanCart";
import { CONTROL_THE_AMOUNT_OF_PRODUCT } from "../../actions/Cart/controlTheAmountOfProduct";

const loadFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("cartData");
    return cartData === null ? { cart: [], sum: 0 } : JSON.parse(cartData);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const initialState = loadFromLocalStorage();

const cartR = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case CONTROL_THE_AMOUNT_OF_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    default:
      return state;
  }
};

export default cartR;

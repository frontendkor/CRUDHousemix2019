import cleanCart from "../Cart/cleanCart";
import openModal from "../Modal/openModal";
export const SEND_CART_REQUEST = "SEND_CART_REQUEST";
export const SEND_CART_SUCCESS = "SEND_CART_SUCCESS";
export const SEND_CART_REQUEST_ERROR = "SSEND_CART_REQUEST_ERROR";

const SendCart = orderData => {
  // console.log(parseFloat(orderData.cart.sum));
  return async dispatch => {
    dispatch(SendCartREQUEST());
    // console.log(orderData);
    if (parseFloat(orderData.cart.sum) > 25) {
      try {
        let response = await fetch(`/housemix/users/user/${orderData.userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(orderData)
        });
        const data = await response.json();
        if (data) {
          await dispatch(SendCartSUCCESS(data.user));
          dispatch(cleanCart());
          dispatch(openModal(true, "Спасибо за заказ"));
        } else {
          dispatch(openModal(true, "Произошла ошибка"));
          dispatch(SendCartREQUEST_ERROR());
        }
      } catch (err) {
        console.log(err);
        dispatch(openModal(true, "Произошла ошибка"));
        dispatch(SendCartREQUEST_ERROR());
      }
    } else {
      dispatch(openModal(true, "Минимальный заказ 25р"));
      dispatch(SendCartREQUEST_ERROR());
    }
  };
};

const SendCartREQUEST = () => {
  return {
    type: SEND_CART_REQUEST,
    payload: {
      wait: true
      // redirect: true
    }
  };
};

const SendCartSUCCESS = data => {
  return {
    type: SEND_CART_SUCCESS,
    payload: {
      wait: false,
      receiverName: data.receiverName,
      phone: data.phone,
      phone2: data.phone2 || "",
      street: data.street,
      house: data.house,
      apartment: data.apartment,
      comment: "",
      // massage: "",
      redirect: true
    }
  };
};

const SendCartREQUEST_ERROR = () => {
  return {
    type: SEND_CART_REQUEST_ERROR,
    payload: {
      redirect: true
    }
  };
};

export default SendCart;

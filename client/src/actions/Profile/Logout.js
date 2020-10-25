export const LOGOUT = "LOGOUT";

const Logout = () => {
  return async dispatch => {
    localStorage.removeItem("token");
    dispatch(action());
  };
};

const action = () => {
  return {
    type: LOGOUT
    // payload: {
    //   wait: false,
    //   isAuth: false,
    //   login: "",
    //   phone: "",
    //   phone2: "",
    //   receiverName: "",
    //   street: "",
    //   house: "",
    //   apartment: "",
    //   massage: ""
    // }
  };
};

export default Logout;

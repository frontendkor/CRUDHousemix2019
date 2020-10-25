import openModal from "../Modal/openModal";
import errProfile from "./errProfile";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const Login = (login, password) => {
  const userRequest = {
    login,
    password
  };
  return async dispatch => {
    dispatch(loginREQUEST());
    try {
      let response = await fetch(`/housemix/users/user/${login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(userRequest)
      });
      if (response.status === 404) {
        dispatch(errProfile());
        dispatch(openModal(true, "Логин или пароль не верный"));
      } else {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.jwt);
        dispatch(loginSUCCESS(data._id, data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const loginREQUEST = () => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      isAuth: false,
      wait: true
    }
  };
};

export const loginSUCCESS = (_id, user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isAuth: true,
      userId: _id,
      login: user.login,
      phone: user.phone,
      phone2: user.phone2 && user.phone2,
      receiverName: user.receiverName && user.receiverName,
      street: user.street && user.street,
      house: user.house && user.house,
      apartment: user.apartment && user.apartment
    }
  };
};

export default Login;

import { loginSUCCESS } from "./Login";

export const GET_JWT_REQUEST = "GET_JWT_REQUEST";
export const GET_JWT_SUCCESS = "GET_JWT_SUCCESS";

const getJWT = () => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      try {
        let response = await fetch(`/housemix/users/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            token: `${token}`
          }
        });
        let data = await response.json();
        dispatch(loginSUCCESS(data._id, data.user));
      } catch (err) {
        localStorage.removeItem("token");
      }
    }
  };
};

export default getJWT;

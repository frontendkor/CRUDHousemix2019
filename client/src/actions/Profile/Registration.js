import openModal from "../Modal/openModal";
import errProfile from "./errProfile";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

const Registration = (history, user) => {
  return async dispatch => {
    dispatch(registrationREQUEST());
    try {
      let response = await fetch("/housemix/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
      });
      let data = await response.json();
      // console.log(data);
      if (data.err) {
        dispatch(errProfile());
        dispatch(openModal(true, data.err));
      }
      await dispatch(registrationSUCCESS(data._id, data.user));
      onProfile(history);
    } catch (err) {
      console.log(err);
    }
  };
};

const registrationREQUEST = () => {
  return {
    type: REGISTRATION_REQUEST,
    payload: {
      isAuth: false,
      wait: true
    }
  };
};

const registrationSUCCESS = (_id, user) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: {
      isAuth: true,
      wait: false,
      userId: _id,
      login: user.login,
      phone: user.phone
    }
  };
};

const onProfile = history => history.replace("/profile");

export default Registration;

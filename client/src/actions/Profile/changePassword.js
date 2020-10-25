export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUSSES";

const changePassword = (passwordActual, passwordNew, id) => {
  return async dispatch => {
    console.log(passwordActual, passwordNew);
    try {
      let response = await fetch(`/housemix/users/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({ passwordActual, passwordNew })
      });
      const data = await response.json();
      if (data) {
        console.log(data);
      } else {
        console.log("Err");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const changePassword_REQUEST = () => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload: {
      // phone1: phone1,
      // phone2: phone2
    }
  };
};

const changePassword_SUCCESS = () => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: {
      // phone1: phone1,
      // phone2: phone2
    }
  };
};

export default changePassword;

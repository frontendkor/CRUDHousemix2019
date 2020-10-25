import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS
} from "../../actions/Profile/Registration";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actions/Profile/Login";
import { LOGOUT } from "../../actions/Profile/Logout";
import {
  SEND_CART_REQUEST,
  SEND_CART_SUCCESS,
  SEND_CART_REQUEST_ERROR
} from "../../actions/Profile/SendCart";
import { REDIRECT } from "../../actions/Profile/redirectTo";
import { ERR_PROFILE } from "../../actions/Profile/errProfile";

const initialProfile = {
  wait: false,
  isAuth: false,
  login: "",
  phone: "",
  phone2: "",
  receiverName: "",
  street: "",
  house: "",
  apartment: "",
  comment: "",
  redirect: false
};

// const loadFromLocalStorage = () => {
//   try {
//     const profile = localStorage.getItem("profile");
//     return profile === null ? initialProfile : JSON.parse(profile);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// };

// const initialState = loadFromLocalStorage();

const ProfileR = (state = initialProfile, action) => {
  switch (action.type) {
    // Registration ====================
    case REGISTRATION_REQUEST:
      return {
        ...state,
        wait: action.payload.wait,
        isAuth: action.payload.isAuth
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        isAuth: action.payload.isAuth,
        userId: action.payload.userId,
        login: action.payload.login,
        password: action.payload.password,
        phone: action.payload.phone
      };

    // Login ===========================
    case LOGIN_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        wait: action.payload.wait,
        userId: action.payload.userId,
        login: action.payload.login,
        phone: action.payload.phone,
        phone2: action.payload.phone2,
        receiverName: action.payload.receiverName,
        street: action.payload.street,
        house: action.payload.house,
        apartment: action.payload.apartment
      };

    // Send an order =======================
    case SEND_CART_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case SEND_CART_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        receiverName: action.payload.receiverName,
        phone: action.payload.phone,
        phone2: action.payload.phone2,
        street: action.payload.street,
        house: action.payload.house,
        apartment: action.payload.apartment,
        comment: action.payload.comment,
        redirect: action.payload.redirect,
        cart: action.payload.cart
      };
    case SEND_CART_REQUEST_ERROR:
      return {
        ...state,
        massage: action.payload.massage,
        redirect: action.payload.redirect
      };

    // Logout =============================
    case LOGOUT:
      return initialProfile;

    // Redirect =============================
    case REDIRECT:
      return {
        ...state,
        redirect: action.payload.redirect,
        wait: action.payload.wait
      };

    // Error ===============================
    case ERR_PROFILE:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        wait: action.payload.wait
      };

    default:
      return state;
  }
};

export default ProfileR;

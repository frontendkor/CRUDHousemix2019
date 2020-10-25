import { OPEN_MODAL } from "../../actions/Modal/openModal";

const initialState = {
  isOpen: false,
  massage: ""
};

const modalR = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        massage: action.payload.massage
      };
    default:
      return state;
  }
};

export default modalR;

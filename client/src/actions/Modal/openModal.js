export const OPEN_MODAL = "OPEN_MODAL";

const openModal = (isOpen, massage) => {
  return dispatch => {
    dispatch(action(isOpen, massage));
  };
};

const action = (isOpen, massage) => {
  return {
    type: OPEN_MODAL,
    payload: {
      isOpen,
      massage
    }
  };
};

export default openModal;

export const ERR_PROFILE = "ERR_PROFILE";

const errProfile = () => {
  return {
    type: ERR_PROFILE,
    payload: {
      isAuth: false,
      wait: false
    }
  };
};

export default errProfile;

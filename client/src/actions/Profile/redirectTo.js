export const REDIRECT = "REDIRECT";
const redirectTo = redirect => {
  return {
    type: REDIRECT,
    payload: {
      redirect,
      wait: false
    }
  };
};

export default redirectTo;

export const FETCH_BONUSES_REQUEST = "FETCH_BONUSES_REQUEST";
export const FETCH_BONUSES_SUCCESS = "FETCH_BONUSES_SUCCESS";

const fetchBonuses = () => {
  return async dispatch => {
    dispatch(fetchBonusesREQUEST());
    try {
      let response = await fetch("data/bonuses/bonuses.json");
      let data = await response.json();
      dispatch(fetchBonusesSUCCESS(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchBonusesREQUEST = () => {
  return {
    type: FETCH_BONUSES_REQUEST,
    payload: {
      wait: true
    }
  };
};

const fetchBonusesSUCCESS = data => {
  return {
    type: FETCH_BONUSES_SUCCESS,
    payload: {
      wait: false,
      bonuses: data
    }
  };
};

export default fetchBonuses;

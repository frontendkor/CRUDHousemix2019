import { FETCH_BONUSES_REQUEST } from "../../actions/Bonuses/fetchBonuses";
import { FETCH_BONUSES_SUCCESS } from "../../actions/Bonuses/fetchBonuses";

export const initialState = {
  wait: true,
  bonuses: null
};

const fetchBonusesR = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BONUSES_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case FETCH_BONUSES_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        bonuses: action.payload.bonuses
      };
    default:
      return state;
  }
};

export default fetchBonusesR;

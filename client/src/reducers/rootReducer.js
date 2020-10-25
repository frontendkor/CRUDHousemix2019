import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import modalR from "./Modal/modalR";
import fetchCatalogR from "./Catalog/fetchCatalogR";
import fetchBonusesR from "./Bonuses/fetchBonusesR";
import cartR from "./Cart/cartR";
import ProfileR from "./Profile/ProfileR";

export const rootReducer = combineReducers({
  modal: modalR,
  catalog: fetchCatalogR,
  bonuses: fetchBonusesR,
  cartData: cartR,
  profile: ProfileR,
  form: formReducer
});

import { FETCH_CATALOG_REQUEST } from "../../actions/Catalog/fetchCatalog";
import { FETCH_CATALOG_SUCCESS } from "../../actions/Catalog/fetchCatalog";

const initialState = {
  wait: true,
  products: []
};

const catalogR = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        products: action.payload.products
      };
    default:
      return state;
  }
};

export default catalogR;

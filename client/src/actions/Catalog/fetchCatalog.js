export const FETCH_CATALOG_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_CATALOG_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchCatalog = () => {
  return async dispatch => {
    dispatch(fetchCatalogREQUEST());
    const url = `data/catalog/catalog.json`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      dispatch(fetchCatalogSUCCESS(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchCatalogREQUEST = () => {
  return {
    type: FETCH_CATALOG_REQUEST,
    payload: {
      wait: true
    }
  };
};

const fetchCatalogSUCCESS = data => {
  return {
    type: FETCH_CATALOG_SUCCESS,
    payload: {
      wait: false,
      products: data
    }
  };
};

export default fetchCatalog;

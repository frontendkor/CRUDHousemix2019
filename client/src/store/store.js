import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Save the state in localStorage
const saveToLocalStorage = (nameStorage, state) => {
  try {
    const stateInJson = JSON.stringify(state);
    localStorage.setItem(nameStorage, stateInJson);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Subscribe to status changes and save in localStorage
store.subscribe(() => {
  saveToLocalStorage("cartData", store.getState().cartData);
  // saveToLocalStorage("profile", store.getState().profile);
});

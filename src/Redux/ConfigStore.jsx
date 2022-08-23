import { createStore, combineReducers } from "redux";
import { giohangReducer } from "./Reducers/giohangReducer";

export const rootReducer = combineReducers({
  giohangReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const reducerList = combineReducers(reducers);
let store = createStore(reducerList, applyMiddleware(thunk));

export default function configureStore() {
  return store;
}

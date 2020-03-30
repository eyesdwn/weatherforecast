import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import weatherReducer from "../redux/reducers";

import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  weather: weatherReducer
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

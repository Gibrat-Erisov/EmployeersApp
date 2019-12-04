import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import listEmployeers from "./employeers-store";

let reducers = combineReducers({ listEmployeers });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import cartReducer from './reducers/cart'
import { userReducer } from "./reducers/user";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
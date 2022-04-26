import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/ProductReducers";

const reducer = combineReducers({
  productCreate: productCreateReducer,
  productDetails: productDetailsReducer,
  productUpdate: productUpdateReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addProductReducer from "../add-product/addProductReducer";
import fetchProductsReducer from "./fetchProductsReducer";

const store=createStore(
    combineReducers(
        {
            fetchProductsList:fetchProductsReducer,
            addProduct:addProductReducer
        }),
    composeWithDevTools(applyMiddleware(thunk) )
    );

export default store;
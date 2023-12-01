import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


import { goods } from "../data/goods";

const goodsState = {
    goods: goods
}

export const goodsReducer = (state = goodsState, action) => {

}
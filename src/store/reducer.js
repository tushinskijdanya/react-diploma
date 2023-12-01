import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";

import { goodsReducer } from "./goodsReducer";
import { langCurrReducer } from "./langCurrReducer";


const rootReducer = combineReducers({
    // goods: goodsReducer,
    // langCurr: langCurrReducer
    gds: goodsReducer,
    lng: langCurrReducer
})

export const shopStore = createStore(rootReducer, composeWithDevTools());

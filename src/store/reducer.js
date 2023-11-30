import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { goodsReducer } from "./goodsReducer";
import { langCurrReducer } from "./langCurrReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    langCurr: langCurrReducer
})

export const shopStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
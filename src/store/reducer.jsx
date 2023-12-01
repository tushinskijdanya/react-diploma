import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import combineReducers from "combine-reducers";

import { goodsReducer } from "./goodsReducer";
import { langCurrReducer } from "./langCurrReducer";


const rootReducer = combineReducers({
    gds: goodsReducer,
    lng: langCurrReducer
})

export const shopStore = createStore(rootReducer, composeWithDevTools());

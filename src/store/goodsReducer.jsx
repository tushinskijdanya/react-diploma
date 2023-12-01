import { goods } from "../data/goods";

const goodsState = {
    goods: goods,
    numb: goods.length
}

const ADD_TO_CART = 'ADD_TO_CART'

export const goodsReducer = (state = goodsState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, goods: [...state.recipes[action.payload], cartActiv == true ]};
        default: return state;
    }

}

export const changeLangAC = (payload) => {
    return {type: ADD_TO_CART, payload};
}

const langCurrState = {
    language: 'ru',
    currency: 'BY',
    search: false
}

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
const OPEN_SEARCH = 'OPEN_SEARCH'

export const langCurrReducer = (state = langCurrState, action) => {
    switch(action.type) {
        case CHANGE_LANGUAGE: 
            console.log('action.payload:', action.payload)
            return {...state, language: action.payload}
        case CHANGE_CURRENCY:
            return {...state, currency: action.payload}
        case OPEN_SEARCH:
            return {...state, search: action.payload}
        default: return state
    }

}

export const changeLangAC = (payload) => {
    return {type: CHANGE_LANGUAGE, payload};
}

export const changeCurrAC = (payload) => {
    return {type: CHANGE_CURRENCY, payload};
}

export const openSearchAC = (payload) => {
    return {type: OPEN_SEARCH, payload};
}
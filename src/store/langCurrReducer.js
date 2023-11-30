const langCurrState = {
    language: 'RU',
    currency: 'BY'
}

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const langCurrReducer = (state = langCurrState, action) => {

}

export const changeLangAC = (payload) => {
    return {type: CHANGE_LANGUAGE, payload};
}

export const changeCurrAC = (payload) => {
    return {type: CHANGE_CURRENCY, payload};
}
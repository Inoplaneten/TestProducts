import { GET_CARDS_PRODUCTS_BEGIN, GET_CARDS_PRODUCTS_SUCCESS, GET_CARDS_PRODUCTS_FAILURE } from '../actionTypes/actionTypes';

const initialState = {
    products: [],
    isLoading: false,
    isError: false
}

const cardsProducts = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS_PRODUCTS_BEGIN:
            return {
                ...state,
                isLoading: true, 
            };
        case GET_CARDS_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false, 
            };
        case GET_CARDS_PRODUCTS_FAILURE:
            return {
                ...state,
                isError: true
            };
        default: 
            return state;
    }
}

export { cardsProducts };